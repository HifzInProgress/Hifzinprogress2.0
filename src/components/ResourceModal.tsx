import React, { useState } from 'react';
import { X, Printer, Download, CheckSquare, Sparkles, BookCheck, FileText } from 'lucide-react';
import { ResourceItem } from '../types';

interface ResourceModalProps {
  resource: ResourceItem | null;
  onClose: () => void;
}

export const ResourceModal: React.FC<ResourceModalProps> = ({ resource, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!resource) return null;

  // Handle Download as formatted .txt file
  const handleDownloadTxt = () => {
    let content = `=================================================\n`;
    content += `${resource.printableTitle}\n`;
    content += `Hifz In Progress · Documenting the Quran Journey\n`;
    content += `=================================================\n\n`;
    content += `OVERVIEW:\n${resource.description}\n\n`;
    content += `INSTRUCTIONS FOR USE:\n`;
    resource.instructions.forEach((ins, idx) => {
      content += `${idx + 1}. ${ins}\n`;
    });
    content += `\nCHECKLIST & ROTATION STRUCTURE:\n`;
    resource.checklistItems.forEach((item) => {
      content += `[ ] ${item}\n`;
    });
    content += `\n-------------------------------------------------\n`;
    content += `Website: https://hifzinprogress.com\n`;
    content += `Instagram: @hifzinprogress\n`;
    content += `One ayah at a time. In sha Allah.\n`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${resource.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  // Handle Printable View
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${resource.printableTitle}</title>
          <style>
            body {
              font-family: 'Georgia', serif;
              color: #111;
              background: #fff;
              padding: 40px;
              max-width: 800px;
              margin: 0 auto;
              line-height: 1.6;
            }
            .header {
              border-bottom: 2px solid #C8A052;
              padding-bottom: 16px;
              margin-bottom: 24px;
            }
            h1 { font-size: 24px; margin: 0 0 8px 0; color: #062D24; }
            .meta { font-size: 13px; color: #666; font-family: sans-serif; }
            h2 { font-size: 16px; margin-top: 24px; color: #062D24; border-bottom: 1px solid #ddd; padding-bottom: 4px; }
            ul { list-style: none; padding-left: 0; }
            li { margin-bottom: 12px; font-size: 14px; display: flex; align-items: flex-start; }
            .box { width: 14px; height: 14px; border: 1.5px solid #333; margin-right: 12px; margin-top: 2px; flex-shrink: 0; }
            .footer { margin-top: 40px; border-top: 1px solid #ddd; padding-top: 16px; font-size: 12px; color: #888; text-align: center; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>${resource.printableTitle}</h1>
            <div class="meta">Hifz In Progress · ${resource.category} · Format: ${resource.pages}</div>
          </div>
          <p>${resource.description}</p>
          <h2>Instructions</h2>
          <ol style="font-size: 13px; color: #333;">
            ${resource.instructions.map(ins => `<li>${ins}</li>`).join('')}
          </ol>
          <h2>Action Checklist &amp; Rotation</h2>
          <ul>
            ${resource.checklistItems.map(item => `<li><div class="box"></div><div>${item}</div></li>`).join('')}
          </ul>
          <div class="footer">
            Hifz In Progress — &ldquo;One ayah at a time. In sha Allah.&rdquo;
          </div>
          <script>
            window.onload = function() { window.print(); };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative bg-[#031C17] border border-gold-subtle rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 float-right z-20 w-10 h-10 rounded-full bg-[#062D24] border border-gold-subtle text-[#F3EBDD] hover:text-[#C8A052] hover:border-[#C8A052] flex items-center justify-center transition-colors"
          aria-label="Close resource modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8A052] mb-1">
            <span>{resource.category}</span>
            <span>·</span>
            <span>{resource.pages}</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F3EBDD] mt-1">
            {resource.title}
          </h3>

          <p className="text-sm text-[#8EA393] font-light mt-1">
            {resource.subtitle}
          </p>
        </div>

        {/* Overview */}
        <div className="bg-[#062D24] border border-gold-subtle rounded-2xl p-5 mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C8A052] mb-2">
            Tool Overview
          </h4>
          <p className="text-xs sm:text-sm text-[#F3EBDD]/90 leading-relaxed font-light">
            {resource.description}
          </p>
        </div>

        {/* Instructions */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C8A052]">
            How to Use This Template
          </h4>
          <ul className="space-y-2">
            {resource.instructions.map((ins, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F3EBDD]/80">
                <span className="w-5 h-5 rounded-full bg-[#073B30] text-[#C8A052] text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-gold-subtle/50">
                  {idx + 1}
                </span>
                <span>{ins}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Checklist Preview */}
        <div className="bg-[#031C17] border border-gold-subtle/60 rounded-2xl p-5 mb-6 space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C8A052] flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-[#C8A052]" />
            <span>Checklist &amp; Rotation Preview</span>
          </h4>
          <div className="space-y-2">
            {resource.checklistItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#062D24]/40 border border-gold-subtle/30 text-xs sm:text-sm text-[#F3EBDD]/90">
                <div className="w-4 h-4 rounded border border-[#C8A052]/60 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions: Print & Download Text */}
        <div className="pt-4 border-t border-gold-subtle/30 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs text-[#8EA393] hover:text-[#F3EBDD] transition-colors"
          >
            Close Preview
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-gold-subtle hover:border-[#C8A052] text-xs font-medium text-[#F3EBDD] transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#C8A052]" />
              <span>{downloadSuccess ? 'Downloaded!' : 'Download .txt'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#C8A052] hover:bg-[#D8B062] text-xs font-semibold uppercase tracking-wider text-[#031C17] transition-all shadow-md"
            >
              <Printer className="w-4 h-4 text-[#031C17]" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

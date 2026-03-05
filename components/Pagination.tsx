import React from 'react';

interface PaginationProps {
  total: number;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  total,
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  className = ""
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-[12px] font-normal text-[#333] mr-6">共 {total} 条记录</span>
      <div className="flex space-x-1">
        <button 
          className="w-7 h-7 rounded border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => onPageChange?.(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" /></svg>
        </button>
        <button 
          className="w-7 h-7 rounded bg-primary text-white flex items-center justify-center text-xs font-bold shadow-sm"
          onClick={() => onPageChange?.(currentPage)}
        >
          {currentPage}
        </button>
        <button 
          className="w-7 h-7 rounded border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => onPageChange?.(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" /></svg>
        </button>
      </div>
    </div>
  );
};

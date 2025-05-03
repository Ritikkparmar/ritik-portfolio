"use client";

import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useTheme } from 'next-themes';
import { Download } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Initialize PDF.js worker
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
}

export default function PDFViewer() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    console.log('PDF Worker URL:', pdfjs.GlobalWorkerOptions.workerSrc);
    // Check if the file exists
    fetch('/resume.pdf')
      .then(response => {
        if (!response.ok) {
          throw new Error('PDF file not found');
        }
      })
      .catch(err => {
        console.error('Error checking PDF file:', err);
        setError('PDF file not found. Please ensure the file exists.');
      });
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    console.log('PDF loaded successfully with', numPages, 'pages');
    setNumPages(numPages);
    setLoading(false);
  }

  function onDocumentLoadError(err: Error) {
    console.error('Detailed PDF loading error:', err);
    setError('Failed to load PDF. Please try again later.');
    setLoading(false);
  }

  const goToPrevPage = () => {
    setPageNumber(page => Math.max(page - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(page => Math.min(page + 1, numPages));
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 bg-red-100 dark:bg-red-900/20 p-4 rounded-lg">
          <p className="font-bold">Error Loading PDF:</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-4xl mb-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-start gap-4 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left text-gray-800 dark:text-white">
            My Resume
          </h1>
          <a
            href="/resume.pdf"
            download="Ritik_Parmar_Resume.pdf"
            className="flex items-center justify-center gap-2 px-6 py-2.5 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors border border-gray-600 w-full sm:w-auto"
          >
            <Download size={20} className="shrink-0" />
            <span className="text-center">Download CV</span>
          </a>
        </div>
      </div>

      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6">
        <Document
          file={process.env.NODE_ENV === 'development' ? '/resume.pdf' : '/resume.pdf'}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={
            <div className="flex flex-col justify-center items-center h-96 gap-4">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
              <p className="text-gray-600 dark:text-gray-300">Loading PDF...</p>
            </div>
          }
          className="flex justify-center"
          error={
            <div className="text-red-500 bg-red-100 dark:bg-red-900/20 p-4 rounded-lg">
              Failed to load PDF. Please check if the file exists.
            </div>
          }
        >
          {loading ? null : (
            <Page
              pageNumber={pageNumber}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className={theme === 'dark' ? 'dark-mode' : ''}
              error={
                <div className="text-red-500">
                  Error loading page {pageNumber}.
                </div>
              }
            />
          )}
        </Document>

        {!loading && numPages > 0 && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
            <button
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              className="w-full sm:w-auto px-4 py-2 bg-purple-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-600 transition-colors"
            >
              Previous
            </button>
            <p className="text-center text-gray-600 dark:text-gray-300">
              Page {pageNumber} of {numPages}
            </p>
            <button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className="w-full sm:w-auto px-4 py-2 bg-purple-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-600 transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 
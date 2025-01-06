import { useState, useEffect } from 'react';
import '../../css/Pages.css';

interface LeetCodeFile {
  name: string;
  content?: string;
  number?: number;
}

const LeetCode = () => {
  const [files, setFiles] = useState<LeetCodeFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<LeetCodeFile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const importAll = async () => {
      try {
        const cppFiles = import.meta.glob('/src/assets/leetcode/*.cpp', {
          as: 'raw',
          eager: true
        });

        const loadedFiles = Object.entries(cppFiles).map(([path, content]) => {
          const name = path.split('/').pop()?.replace('.cpp', '') || '';
          debugger;
          // Extract number from filename (assuming format: "123-problem-name.cpp")
          const numberMatch = name.match(/^\d+/); // Matches the leading digits
          const number = numberMatch ? parseInt(numberMatch[0]) : Infinity;
          return {
            name,
            content,
            number: isNaN(number) ? Infinity : number
          };
        });

        // Sort numerically by problem number
        setFiles(loadedFiles.sort((a, b) => (a.number || 0) - (b.number || 0)));
      } catch (error) {
        console.error('Error loading leetcode files:', error);
      } finally {
        setLoading(false);
      }
    };

    importAll();
  }, []);

  return (
    <div className="leetcode-container py-5">
      <div className="container">
        <h2 className="text-center text-white mb-4">LeetCode Solutions</h2>
        
        {loading ? (
          <div className="text-center text-white">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-md-4">
              <div className="card bg-dark">
                <div className="card-body">
                  <h5 className="card-title text-white mb-3">Select Problem</h5>
                  <select
                    className="form-select bg-dark text-white border-secondary"
                    value={selectedFile?.name || ''}
                    onChange={(e) => {
                      const file = files.find(f => f.name === e.target.value);
                      setSelectedFile(file || null);
                    }}
                  >
                    <option value="">Choose a problem...</option>
                    {files.map((file) => (
                      <option key={file.name} value={file.name}>
                        {file.number ? `#${file.number} - ` : ''}{file.name.split('.').slice(1).join(' ')}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            <div className="col-md-8">
              {selectedFile ? (
                <div className="card bg-dark">
                  <div className="card-body">
                    <h5 className="card-title text-white mb-3">
                      {selectedFile.number ? `#${selectedFile.number} - ` : ''}
                      {selectedFile.name.split('-').slice(1).join(' ')}
                    </h5>
                    <pre className="text-white">
                      <code>{selectedFile.content}</code>
                    </pre>
                  </div>
                </div>
              ) : (
                <div className="card bg-dark">
                  <div className="card-body text-center text-secondary">
                    <p className="mb-0">Select a problem to view its solution</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeetCode;
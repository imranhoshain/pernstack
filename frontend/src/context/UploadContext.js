import React, { createContext, useEffect, useState } from 'react';
import { fetchFiles } from '../services/api';

export const UploadContext = createContext({ files: [], refresh: () => {} });

export function UploadProvider({ children }) {
  const [files, setFiles] = useState([]);

  const refresh = async () => {
    const latest = await fetchFiles();
    setFiles(latest);
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <UploadContext.Provider value={{ files, refresh }}>
      {children}
    </UploadContext.Provider>
  );
}

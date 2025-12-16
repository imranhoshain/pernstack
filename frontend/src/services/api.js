const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

export async function uploadFile(file) {
  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch(`${API_BASE_URL}/files`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || 'Upload failed');
  }

  return res.json();
}

export async function fetchFiles() {
  const res = await fetch(`${API_BASE_URL}/files`);
  if (!res.ok) {
    throw new Error('Failed to fetch files');
  }
  return res.json();
}

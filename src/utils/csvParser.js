import Papa from 'papaparse';

export const parseCSV = async (filePath, callback) => {
  fetch(filePath)
    .then(response => response.text())
    .then(data => {
      Papa.parse(data, {
        header: true,
        complete: callback,
      });
    });
};

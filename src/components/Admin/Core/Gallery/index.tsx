import React, { useEffect, useState } from 'react';
import { Folder } from '../../../Icons';
import './gallery.scss';

import { IFile } from '../../../../types/@core/IFile';

export default function Gallery(): React.ReactElement {
  const [activeTab, setActiveTab] = useState('library');
  const [files, setFiles]: any = useState(
    [
      {
        id: '1',
        name: 'Фото',
        type: 'folder',
        path: '',
        size: 0,
        createdAt: '',
      },
    ],
  );

  useEffect(() => {
    console.log('files', files);
  });

  function getMonthsByYear(name: string) {
    setFiles([
      {
        id: 1,
        name: 'January',
      },
      {
        id: 2,
        name: 'February',
      },
      {
        id: 3,
        name: 'March',
      },
      {
        id: 4,
        name: 'April',
      },
      {
        id: 5,
        name: 'May',
      },
      {
        id: 6,
        name: 'June',
      },
      {
        id: 7,
        name: 'July',
      },
      {
        id: 8,
        name: 'August',
      },
      {
        id: 9,
        name: 'September',
      },
      {
        id: 10,
        name: 'October',
      },
      {
        id: 11,
        name: 'November',
      },
      {
        id: 12,
        name: 'December',
      },
    ]);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-modal">
        <button type="button" className="gallery-modal-close transparent">
          <i className="mi mi-ChromeClose" />
        </button>
        <div className="gallery-modal-content">
          <div className="gallery-modal-header">
            <h2 className="gallery-modal-title">
              Imagem destacada
            </h2>
            <div className="gallery-modal-actions">
              <button type="button" className={`gallery-modal-action btn-tab btn-w-icon ${activeTab === 'send_files' ? 'active' : ''}`} onClick={() => { setActiveTab('send_files'); }}>
                <i className="mi mi-Upload" />
                <span>Send files</span>
              </button>
              <button type="button" className={`gallery-modal-action btn-tab btn-w-icon ${activeTab === 'library' ? 'active' : ''}`} onClick={() => { setActiveTab('library'); }}>
                <i className="mi mi-OpenFolderHorizontal" />
                <span>Library</span>
              </button>
            </div>
          </div>
          <div className="gallery-modal-body">
            <div className={`tab-item send-new-file ${activeTab === 'send_files' ? 'active' : ''}`}>
              Aqui
            </div>
            <div className={`tab-item gallery-modal-files ${activeTab === 'library' ? 'active' : ''}`}>
              <div className="files-list">
                {files.map((file: any) => (
                  <button type="button" className="file-item" key={file.id} onClick={() => { getMonthsByYear(file.name); }}>
                    <Folder />
                    <span>{file.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

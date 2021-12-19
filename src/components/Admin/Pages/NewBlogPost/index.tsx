import React, { useEffect, useRef, useState } from 'react';
import EditorJS, { LogLevels } from '@editorjs/editorjs';
import ImageTool from '@editorjs/image';
import Header from '@editorjs/header';

import './new-blog-post.scss';
import { Header as HeaderBar, Gallery } from '../../Core';

export default function NewBlogPost(): React.ReactElement {
  const ejInstance = useRef();
  const [viewGallery, setViewGallery] = useState(true);

  useEffect(() => {
    document.title = 'New Blog Post';
    if (!ejInstance.current) {
      initEditor();
    }
  }, []);

  const setActiveEditorAction = (id: string) => {
    const htmlElement: HTMLElement | null = document.getElementById(id);
    if (htmlElement) {
      if (htmlElement.classList.contains('active')) {
        htmlElement.classList.remove('active');
      } else {
        htmlElement.classList.add('active');
      }
    }
  };

  const postBlog = {
    title: '',
    content: '',
    image: {
      url: '',
    },
  } as any;

  const initEditor = () => new EditorJS({
    holder: 'editorjs',
    autofocus: true,
    logLevel: 'ERROR' as LogLevels,
    tools: {
      header: Header,
      image: {
        class: ImageTool,
        config: {
          endpoints: {
            byFile: 'http://localhost:3000/api/v1/images',
            byUrl: 'http://localhost:3000/api/v1/images',
          },
        },
      },
    },
  });

  return (
    <div className="app-container">
      <HeaderBar color="blog" />
      <div className="page-container">
        <section className="content-tools left-sidebar">
          <div id="description" className="tool-container active">
            <h2>
              <button type="button" className="btn-w-icon" onClick={() => { setActiveEditorAction('description'); }}>
                <i className="mi mi-Page" />
                Description
              </button>
            </h2>
            <div className="tool-data">
              <textarea name="description" id="description" />
            </div>
          </div>
          <div id="slug" className="tool-container active">
            <h2>
              <button type="button" className="btn-w-icon" onClick={() => { setActiveEditorAction('slug'); }}>
                <i className="mi mi-Link" />
                Slug
              </button>
            </h2>
            <div className="tool-data">
              <input type="text" name="slug" id="slug" className="standart text-box" />
            </div>
          </div>
          <div id="thumbnail" className="tool-container">
            <h2>
              <button type="button" className="btn-w-icon" onClick={() => { setActiveEditorAction('thumbnail'); }}>
                <i className="mi mi-Photo2" />
                Thumbnail
              </button>
            </h2>
            <div className="tool-data">
              <button type="button" className="neutral" onClick={() => { setViewGallery(true); }}>
                Set thumbnail
              </button>
            </div>
          </div>
          <div id="categories" className="tool-container">
            <h2>
              <button type="button" className="btn-w-icon" onClick={() => { setActiveEditorAction('categories'); }}>
                <i className="mi mi-List" />
                Categories
              </button>
            </h2>
          </div>
          <div id="comments" className="tool-container">
            <h2>
              <button type="button" className="btn-w-icon" onClick={() => { setActiveEditorAction('comments'); }}>
                <i className="mi mi-Comment" />
                Comments
              </button>
            </h2>
            <div className="tool-data">
              <div className="checkbox-container">
                <label htmlFor="allow-comments">
                  <input type="checkbox" name="allow-comments" id="allow-comments" />
                  <span className="checkmark" />
                  <span className="checkbox-label">Allow comments</span>
                </label>
              </div>
            </div>
          </div>
        </section>
        <section className="content-editor container">
          <div className="page-header">
            <div className="content-title">
              <label htmlFor="post-title" className="post-title">
                <span>Title:</span>
                <input type="text" className="title-field" id="post-title" />
              </label>
            </div>
            <div className="content-actions">
              <button type="button" className="neutral btn-w-icon">
                <i className="mi mi-Save" />
                Save draft
              </button>
              <button type="button" className="save btn-w-icon">
                <i className="mi mi-Globe" />
                Publish
              </button>
            </div>
          </div>
          <div id="editorjs" className="editor" />
        </section>
      </div>
      <Gallery />
    </div>
  );
};

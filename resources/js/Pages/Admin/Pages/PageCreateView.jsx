
import MyImageInput from '@/Components/MyImageInput';
import MyTextarea from '@/Components/MyTextarea';
import MyTextInput from '@/Components/MyTextInput';
import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { router } from "@inertiajs/react"


const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    // [{ font: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ color: [] }, { background: [] }],
    [{ script: 'sub' }, { script: 'super' }],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['code-block'],
    [{ align: [] }],
    ['clean'],
  ],
};

 const formats = [
  'header',
  // "font",
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'color',
  'code-block',
  'video',
  'sub',
  'super',
  'align',
];
const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');


function PageCreateView({pageInputState,setCreatePageInputState, updatePageInputState, clearCreatePageState,auth}) {

  // console.log(pageInputState)
  const pageCreateActionHandler =(event)=>{
    
    event.preventDefault()

    const formData = new FormData(event.currentTarget);

    formData.append('content', pageInputState?.content);

    const data = Object.fromEntries(formData);


    router.post('/auth/pages', 
      data,{
            onSuccess: () => {
              console.log("success");
              
            },
        }
    );
  }


  return (
    <>
    <form onSubmit={pageCreateActionHandler} >
     
        <div
          className="w-full overflow-auto border-b bg-surface px-6 py-6  lg:px-20"
          style={{
            maxHeight: 'calc(100vh - 205px)',
          }}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* <MyImageInput
              label="New Image"
              name="base64Attachment"
              value={pageInputState?.base64Attachment}
              required={true}
              onChangeHandler={(name, value) => {
                updatePageInputState(name, value);
              }}
              id={'base64Attachment'}
            /> */}
          <input type="file" name="attachment"
               onChangeHandler={(name, value) => {
                updatePageInputState(name, value);
              }}></input>

          </div>
          <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 lg:grid-cols-4">
            <MyTextInput
              label={'Page Title'}
              name={'title'}
              // error={errors?.title}
              value={pageInputState?.title}
              inputType={'text'}
              leftIcon={<i className="fa-solid fa-heading"></i>}
              onChangeHandler={(event) => {
                updatePageInputState(event.target.name, event.target.value);
                updatePageInputState('slug', slugify(event.target.value));
              }}
              id={'title'}
            />
            <MyTextInput
              label={'Page Slug'}
              name={'slug'}
              value={pageInputState?.slug}
              // error={errors?.slug}
              inputType={'text'}
              leftIcon={<i className="fa-solid fa-link"></i>}
              onChangeHandler={(event) => {
                updatePageInputState(
                  event.target.name,
                  slugify(event.target.value)
                );
              }}
              id={'slug'}
            />

            <MyTextInput
              label={'Page Order'}
              name={'order'}
              // error={errors?.order}
              value={pageInputState?.order?.toString()}
              inputType={'number'}
              leftIcon={<i className="fa-solid fa-arrow-down-1-9"></i>}
              onChangeHandler={(event) => {
                updatePageInputState(event.target.name, event.target.value);
              }}
              id={'order'}
            />
          </div>
          <div className="mt-4 grid grid-cols-1">
            <MyTextarea
              label={'Short Description'}
              name={'shortDescription'}
              value={pageInputState?.shortDescription}
              // error={errors?.shortDescription}
              rows={4}
              onChange={(event) => {
                updatePageInputState(event.target.name, event.target.value);
              }}
            />
          </div>
          <div className=" mt-2 grid  grid-cols-1 ">
            <label htmlFor="content">Content</label>
            {/* <div
              className={`prose max-w-full
                  ${errors?.content && 'border border-error'}
                  `}
            > */}
              <ReactQuill
                theme="snow"
                id="content"
                name="content"
                modules={modules}
                formats={formats}
                value={pageInputState?.content ? pageInputState?.content : ''}
                onChange={(value) => {
                  updatePageInputState('content', value);
                }}
              />
            {/* </div> */}
          </div>

        </div>
        <div className="flex items-center justify-end gap-4 bg-surface py-2 px-4">
            <button
                className="rounded bg-primary px-4 py-2 text-onPrimary shadow-sm transition-all duration-150 hover:scale-105 hover:bg-primaryVariant hover:shadow"
                type="submit"
              >
                Submit
            </button>
          </div>
      </form>
    </>
  )
}

export default PageCreateView

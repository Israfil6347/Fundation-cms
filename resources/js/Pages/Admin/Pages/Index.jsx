
import { Typography } from '@material-tailwind/react';
import MySearchInput from '@/Components/MySearchInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { motion } from "framer-motion";
import { useState } from 'react';
import { Head, useRemember } from '@inertiajs/react';
import Modal from '@/Components/Modal';
import PageCreateView from './PageCreateView';
import useCreatePageInputState from './hooks/useCreatePageInputState';
import { usePage } from '@inertiajs/react';

const TABLE_HEAD = ['Title', 'Slug', 'Order', 'Image', 'Status', ''];


export default function Index({ auth }) {
    const [currentPage, setCurrentPage] = useState('1');
    const [createPageUrl, setCreatePageUrl] = useRemember(false);
    const { pages } = usePage().props;
    const { message } = usePage().props;
 
    const {
    createPageInputState,
    setCreatePageInputState,
    updateCreatePageInputState,
    clearCreatePageState,
    } = useCreatePageInputState();

    console.log(message)

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
        >
        <Head title="Page" />

     
        

       <Modal show={createPageUrl} maxWidth="XXXl" onClose={()=>{setCreatePageUrl(false)}} auth={auth} >
        <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4">
            <div className="flex items-center">
              <i className="fa-solid fa-circle-info fa-lg"></i>
              <span className="ml-3 text-xl font-semibold">{`Create Page`}</span>
            </div>

            <div className="flex items-center gap-4">
                <button
                  className="flex items-center transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-error"
                  onClick={() => {
                    setCreatePageUrl(false);
                  }}
                >
                  <i className="fa-solid fa-circle-xmark fa-lg"></i>
                </button>
            </div>
          </div>
        <div className="flex h-1 space-x-4 overflow-auto border-b border-gray-200 bg-secondary px-4"></div>
        <PageCreateView 
          pageInputState={createPageInputState}
          setCreatePageInputState={setCreatePageInputState}
          updatePageInputState={updateCreatePageInputState}
         
        />
                
       </Modal>
            {/* <Head title="Dashboard" /> */}

          <motion.div
            initial={{ opacity: 1, x: '100vw', skewX: '-30deg' }}
            animate={{
              x: 0,
              y: 0,
              skewX: '0deg',
              opacity: 1,
              transition: { velocity: 10 },
            }}
            className="m-2 h-[calc(100vh-130px)] w-[calc(100vw-74px)] rounded bg-surface p-2 shadow-sm "
          >
            <div className="rounded-none">
              <div className="mb-8 flex items-center justify-between gap-8">
                <div>
                  <p className="text-2xl font-bold">Page</p>
                  <p className="mt-1 font-normal">
                    See information about all page
                  </p>
                </div>
                <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                  {/* {pages?.createNew && ( */}
                    <button
                      className="flex items-center gap-3 rounded bg-primary px-4 py-2 text-onPrimary"
                      onClick={() => {
                        setCreatePageUrl(true);
                      }}
                    >
                      <i className="fa-brands fa-page4"></i>
                      {/* {pages.createNew.label} */}Create Page
                    </button>
                  {/* )} */}
                </div>
              </div>
              <div className="my-2 flex flex-col items-center justify-between gap-4 md:flex-row">
                {/* <RecordsPerPage onClickHandler={setRecordPerPage} /> */}
                <div className="w-full md:w-72">
                  <form
                    action=""
                    // onSubmit={(event) => {
                    //   searchClickHandler(event);
                    // }}
                  >
                    {/* <MySearchInput
                      label="Search"
                    //   inputRef={searchInputRef}
                      name={''}
                    /> */}
                  </form>
                </div>
              </div>
            </div>
            <div className="overflow-scroll px-0">
              <div className="h-[calc(100vh-430px)] overflow-auto md:h-[calc(100vh-350px)]">
                <table className="whitespace-no-wrap relative w-full table-auto border-collapse border">
                  <thead className="w-full">
                    <tr className="sticky -top-0 hidden h-14 w-full shadow-sm md:table-row">
                      {TABLE_HEAD.map((head, index) => (
                        <th
                          key={head}
                          className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50  p-4 transition-colors hover:bg-blue-gray-50 "
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="flex items-center justify-between gap-2 font-normal leading-none "
                          >
                            {head}
                            {index !== TABLE_HEAD.length - 1 && (
                              <i className="fa-solid fa-up-down"></i>
                            )}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="flex-1 sm:flex-none">
                    {pages &&
                      pages.map((page, index) => {
                        return (
                          <tr
                            key={index}
                            className="flex w-full flex-col flex-wrap border-b border-blue-gray-50 last:border-b-0 even:bg-blue-gray-600/5 md:table-row"
                          >
                            <td className="border px-2">
                              <label className="md:hidden">Title</label>
                              <p className="font-semibold md:font-normal">
                                {page.title}
                              </p>
                            </td>
                            <td className="border px-2">
                              <label className="md:hidden">Slug</label>
                              <p className="font-semibold md:font-normal">
                                {page.slug}
                              </p>
                            </td>
                            <td className="border px-2">
                              <label className="md:hidden">Order</label>
                              <p className="font-semibold md:font-normal">
                                {page.order}
                              </p>
                            </td>

                            <td className="border px-2">
                              <label className="md:hidden">Image</label>
                              <img
                                // src={
                                //   page.thumbnailAttachmentUrl
                                //     ? page.thumbnailAttachmentUrl
                                //     : originalLogo
                                // }
                                src={page.attachment_url}
                                alt={page.title}
                                className="h-10 w-10 rounded-full"
                              />
                            </td>
                            <td className="border px-2">
                              <label className="md:hidden">Status</label>
                              <span
                                className={`w-fit rounded-md ${
                                  page.publishStatus !== 'Published'
                                    ? 'bg-orange-600 '
                                    : 'bg-green-600 '
                                } py-0.5 px-1 text-white shadow`}
                              >
                                {page.publishStatus}
                              </span>
                            </td>

                            <td className="h-full border px-2">
                              <div className="flex h-full">
                                {page.links?.map((link, index) => {
                                  if (link) {
                                    return (
                                      <Tooltip content={link.label} key={index}>
                                        <IconButton
                                          variant="text"
                                          onClick={() => {
                                            if (link.rel === 'show') {
                                              executePageQuery(link.url, HEADERS);
                                              setPageViewUrl(link.url);
                                            }
                                            if (link.rel === 'update') {
                                              executePageQuery(link.url, HEADERS);
                                              setPageUpdateUrl(link.url);
                                            }
                                            if (link.rel === 'destroy') {
                                              Swal.fire({
                                                title: 'Are you sure?',
                                                text: "You won't be able to revert this!",
                                                icon: 'warning',
                                                showCancelButton: true,
                                                confirmButtonColor: '#222d67',
                                                cancelButtonColor: '#b12e06',
                                                confirmButtonText:
                                                  'Yes, delete it!',
                                              }).then((result) => {
                                                if (result.isConfirmed) {
                                                  pageRemoveActionHandler(link.url);
                                                }
                                              });
                                            }
                                            if (link.rel === 'publish') {
                                              Swal.fire({
                                                title: 'Are you sure?',
                                                text: 'You are going to publish this page. It will be visible to the public.',
                                                icon: 'warning',
                                                showCancelButton: true,
                                                confirmButtonColor: '#222d67',
                                                cancelButtonColor: '#b12e06',
                                                confirmButtonText:
                                                  'Yes, Make it Publish',
                                              }).then((result) => {
                                                if (result.isConfirmed) {
                                                  pagePublishActionHandler(
                                                    link.url
                                                  );
                                                }
                                              });
                                            }
                                            if (link.rel === 'draft') {
                                              Swal.fire({
                                                title: 'Are you sure?',
                                                text: "You are making this page draft, it won't be visible to the public.",
                                                icon: 'warning',
                                                showCancelButton: true,
                                                confirmButtonColor: '#222d67',
                                                cancelButtonColor: '#b12e06',
                                                confirmButtonText:
                                                  'Yes, Make it Draft',
                                              }).then((result) => {
                                                if (result.isConfirmed) {
                                                  pageDraftActionHandler(link.url);
                                                }
                                              });
                                            }
                                          }}
                                        >
                                          <i
                                            className={`text-xl text-primary dark:text-white ${link.icon}`}
                                          ></i>
                                        </IconButton>
                                      </Tooltip>
                                    );
                                  }
                                  return null;
                                })}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
            {/* <MyPagination
              currentPage={currentPage}
              meta={pages?.meta}
              setCurrentPage={setCurrentPage}
            /> */}
          </motion.div>
        </AuthenticatedLayout>
    );
}

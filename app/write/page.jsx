'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import image from '../../public/image.png'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/utils/firebase';
import { useRouter } from 'next/navigation';


const storage = getStorage(app);

const  modules  = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        ["link", "image", "video"],
        ["clean"],
    ],
};

const WritePage = () => {
    
    const router=useRouter();
    const [value, setValue] = useState('');//desc
    const [media, setMedia] = useState('');//imageURL
    const [title, setTitle] = useState('');//title
    const [author, setAuthor] = useState('');//author
    const [file, setFile] = useState(null);//image
    const [cat, setCat] = useState('');//category

    useEffect(() => {
        const upload = () => {
            const uniqueName = new Date().getTime + file.name;
            const storageRef = ref(storage, uniqueName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setMedia(downloadURL);
                        console.log(downloadURL)
                    });
                }
            );
        };
        file && upload()
    }, [file])

    const slugify = (str) => str.toLowerCase().trim();

    const handleSubmit = async () => {
        const res = await fetch('/api/posts', {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                image: media,
                slug: slugify(title),
                catSlug: cat,
                author,
            })
        })
        console.log(res)
        router.push('/');
    }

    return (
        <div className='w-4/6 m-auto flex flex-col gap-8'>
            {/* <ReactQuill/> */}
            <div className='flex items-center gap-16'>
                <input type="file" id='image' onChange={e => setFile(e.target.files[0])} style={{ display: "none" }} />
                <button className='flex items-center bg-gray-200 px-2 gap-2 rounded-md min-w-max'>
                    <label htmlFor="image" className='flex items-center cursor-pointer'>
                        <Image src={image} alt='' height={100} width={100} className='w-12 h-12 object-cover mr-4' />
                        Image
                    </label>
                </button>
            </div>
            {media && <Image src={media} alt='' height={500} width={500} className=' object-cover aspect-video rounded-xl border-gray-400 border'/>}
            <input type="text" placeholder='Title' onChange={e => setTitle(e.target.value)} className='border border-gray-200 p-2  text-gray-800 rounded-lg' />
            <input type="text" placeholder='Author' onChange={e => setAuthor(e.target.value)} className='border border-gray-200 p-2  text-gray-800 rounded-lg' />
            <select onChange={e=>setCat(e.target.value)} className='border border-gray-200 p-2  text-gray-800 rounded-lg'>
                <option value="style">Style</option>
                <option value="food">Food</option>
                <option value="culture">Culture</option>
                <option value="travel">Travel</option>
                <option value="coding">Coding</option>
            </select>
            <ReactQuill theme="snow" modules={modules} value={value} onChange={setValue} placeholder='Tell your story...' className='border text-inherit text-gray-800 rounded-lg' />
            <button onClick={handleSubmit} className=' py-1 px-3 bg-emerald-500 text-white rounded-md hover:bg-emerald-600'>Publish</button>
        </div>
    )
}

export default WritePage
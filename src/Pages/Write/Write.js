import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Write = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageStorageKey = '17b42be990566269a9132b2782f7586f';

    const onSubmit = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const blog = {
                        title: data.title,
                        description: data.description,
                        category: data.category.toLowerCase(),
                        image: img,

                    }
                    // send to DB
                    fetch('http://localhost:5000/blog', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(blog)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Blog Added')
                            }
                        })

                }
            })
    };


    return (
        <div className='min-h-screen max-w-7xl mx-auto'>
            <h2 className='text-2xl font-semibold text-center'>Write Blogs Here</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Image Field Starts */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Image</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full max-w-xs   pt-1"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                },
                            })}
                        />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                        </label>
                    </div>
                    {/* Image Field Ends */}

                    {/* Title Field Starts */}
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text font-semibold">Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Title"
                            className="input input-bordered w-full max-w-xs"
                            {...register("title", {
                                required: {
                                    value: true,
                                    message: 'Title is Required'
                                },
                            })}
                        />
                        <label className="label">
                            {errors.title?.type === 'required' && <span className="label-text-alt text-red-500">{errors.title.message}</span>}
                        </label>
                    </div>
                    {/* Title Field Ends */}

                    <label className="label">
                        <span className="label-text font-semibold">Category</span>
                    </label>
                    <select
                        {...register("category")}
                        class="select  input-bordered mb-5 w-full max-w-xs">
                        <option disabled selected>Choose</option>
                        <option>Programming</option>
                        <option>Food</option>
                        <option>Travel</option>
                    </select>

                    {/* Body Field Starts */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Body</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Body"
                            rows={10}
                            className="textarea w-full "
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Body is Required'
                                },
                            })}
                        />
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                        </label>
                    </div>
                    {/* Body Field Ends */}

                    <input type="submit" className='btn btn-primary text-white w-full max-w-xs' value='Post' />
                </form>
            </div>
        </div>
    );
};

export default Write;
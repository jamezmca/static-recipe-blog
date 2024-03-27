'use client'
import React, { useState } from 'react'
import SearchBar from './SearchBar'
import PostCard from './PostCard'

export default function SearchView(props) {
    const { postMetadata } = props
    const [searchValue, setSearchValue] = useState('')

    return (
        <>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="postsContainer">
                {postMetadata.filter(val => {
                    return val.title.includes(searchValue)
                }).map((post, postIndex) => {
                    return (
                        <PostCard key={postIndex} post={post} />
                    )
                })}
            </div>
        </>
    )
}

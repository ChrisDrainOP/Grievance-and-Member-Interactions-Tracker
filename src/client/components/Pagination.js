import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];



    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
        console.log(pageNumbers)
    }

    return( 
    <nav className="w-4/5 m-auto">
        <ul className="flex">
            {pageNumbers.map(number => (
                <li key={number} className="bg-blue-300 border-black border active:bg-purple-400 hover:bg-purple-400">
                    <a href="#" onClick={() => 
                        paginate(number) } 
                        className="p-2 text-black">
                        {number}
                    </a>
                </li>)
            )}
        </ul>
    </nav>
    )
}

export default Pagination;
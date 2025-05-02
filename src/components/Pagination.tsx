import React from 'react';


type Props = {
    totalPages: number,
    currentPage : number,
    setCurrentPage (pageNumber: number) :void
}
const Pagination = ({ totalPages,currentPage,setCurrentPage}: Props) => {
    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const getPages = () => {
        const pages = [];

        pages.push(1);

        if (currentPage > 3 && currentPage < totalPages - 2) {
            pages.push('...');
        }

        if (currentPage - 1 > 1 && currentPage + 1 < totalPages) {
            pages.push(currentPage - 1, currentPage, currentPage + 1);
        }

        if (currentPage < totalPages - 2) {
            pages.push('...');
        }

        pages.push(totalPages);

        return [...new Set(pages)];
    };

    return (
        <div className="flex justify-center mt-4 gap-2 items-center">
            <button
                onClick={handlePrevClick}
                className={`px-3 py-1 border rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-white'}`}
                disabled={currentPage === 1}
            >
                Prev
            </button>

            {getPages().map((page) =>
                page === '...' ? (
                    <span key={page} className="px-3 py-1 text-gray-500">...</span>
                ) : (
                    <button
                        key={page}
                        onClick={() => handlePageClick(page as number)}
                        className={`px-3 py-1 border rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white'}`}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                onClick={handleNextClick}
                className={`px-3 py-1 border rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-white'}`}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;

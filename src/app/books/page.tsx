"use client";

import React, { useState, useEffect } from 'react';

// Define Book interface
interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  description: string;
  year: number;
  genre: string;
  format: string;
  fileSize: string;
  rating: number;
  googleDriveLink: string;
}

const BookDownloadPage = () => {
  const [books] = useState<Book[]>([
    {
      id: 1,
      title: "Hamdard Matab",
      author: "Hakeem Abdul Hameed Dehlvi ",
      cover: "https://www.niir.org/g/b/ni103_full.jpg",
      description: "The Hamdard Matab Book is a comprehensive guide to traditional Unani medicine, providing in-depth knowledge about natural remedies, herbal formulations, and holistic healing methods. It covers various ailments, their symptoms, and effective treatments based on Unani principles, making it a valuable resource for practitioners, students, and anyone interested in natural healthcare. The book also includes insights from Hamdard's rich legacy in herbal medicine, offering time-tested remedies and modern applications of Unani practices.",
      year: 1925,
      genre: "Classic Fiction",
      format: "PDF",
      fileSize: "2.4 MB",
      rating: 4.5,
      googleDriveLink: "https://drive.google.com/file/d/1cyXyA51zjkG-8DQJXR11n-2JXzgFSoZo/view?usp=sharing"
    },
    {
      id: 2,
      title: " National Formulary of Unani Medicine ",
      author: "Central Council for Research in Unani Medicine (CCRUM),",
      cover: "https://imgv2-1-f.scribdassets.com/img/document/550205433/original/15356421c1/1707405818?v=1",
      description: "The National Formulary of Unani Medicine (NFUM) Part 1 is an authoritative reference published in 1983 by the Government of India's Ministry of Health and Family Welfare. This formulary compiles 441 compound formulations used in Unani medicine, serving as an official standard for practitioners and manufacturers",
      year: 1981 ,
      genre: "Classic Fiction",
      format: "EPUB",
      fileSize: "1.8 MB",
      rating: 4.8,
      googleDriveLink: "https://drive.google.com/file/d/17qlaBBbpWbqxBjBQGiDFL2X0yb5VjrQv/view?usp=sharing"
    },
    {
      id: 3,
      title: "1984",
      author: "Central Council for Research in Unani Medicine (CCRUM)",
      cover: "https://cdn.exoticindia.com/images/products/original/books-2019/ubc388b.jpg",
      description: "The National Formulary of Unani Medicine (NFUM) Part II is an authoritative publication by the Ministry of Health and Family Welfare, Government of India, released in 1994.",
      year: 1949,
      genre: "Dystopian Fiction",
      format: "PDF",
      fileSize: "3.1 MB",
      rating: 4.7,
      googleDriveLink: "https://drive.google.com/file/d/1UXfZX8NF8M8Vpuhrkk_VReF3LN7rDTRU/view?usp=sharing"
    },
    {
        "id": 5,
        "title": "National Formulary of Unani Medicine Part 3",
        "author": "Central Council for Research in Unani Medicine (CCRUM)",
        "cover": "https://m.media-amazon.com/images/I/418D1xSNGAL._AC_UF1000,1000_QL80_.jpg",
        "description": "Part 3 of the NFUM includes 103 compound formulations widely used in Unani medicine, expanding the standardization efforts of traditional remedies.",
        "year": 2001,
        "genre": "Traditional Medicine",
        "format": "PDF",
        "fileSize": "12 MB",
        "rating": 4.7,
       "googleDriveLink": "https://drive.google.com/file/d/1qyHpxaQaSgZZeDhWeMJ_-oxJu80GMlhX/view?usp=sharing"
             },
      {
        "id": 6,
        "title": "QARABAD MAJEEDI",
        "author": "Central Council for Research in Unani Medicine (CCRUM)",
        "cover": "https://m.media-amazon.com/images/I/61opuyd1nBL._AC_UF1000,1000_QL80_.jpg",
        "description": "Qarabad Majeedi is a combination of herbal and mineral ingredients that are commonly used in Unani medicine to treat a variety of conditions. It is often used for improving digestion, boosting appetite, and providing relief from indigestion and bloating. Additionally, it is believed to support overall health by strengthening the body's immune system and promoting the proper functioning of various organs.",
        "year": 2007 ,
        "genre": "Traditional Medicine",
        "format": "PDF",
        "fileSize": "15 MB",
        "rating": 4.8,
"googleDriveLink": "https://drive.google.com/file/d/1v44251lNIrd6n2lnvx-kISiaPVgWAbFZ/view?usp=sharing"
      },
      {
        "id": 7,
        "title": "National Formulary of Unani Medicine Part 4",
        "author": "Central Council for Research in Unani Medicine (CCRUM)",
        "cover": "https://m.media-amazon.com/images/I/71-tCL0r4NL._AC_UF1000,1000_QL80_.jpg",
        "description": "Part 4 of the NFUM further enriches the Unani formulary with additional formulations, continuing the effort to standardize and promote Unani medicinal practices.",
        "year": 2006,
        "genre": "Traditional Medicine",
        "format": "PDF",
        "fileSize": "15 MB",
        "rating": 4.8,
        "googleDriveLink": "https://drive.google.com/file/d/13DCCr01lhbWkpuVQrrEuMF2LI8ErmyNJ/view?usp=sharing"
      },
      {
        "id": 8,
        "title": "National Formulary of Unani Medicine Part 4",
        "author": "Central Council for Research in Unani Medicine (CCRUM)",
        "cover": "https://m.media-amazon.com/images/I/71-tCL0r4NL._AC_UF1000,1000_QL80_.jpg",
        "description": "Part 4 of the NFUM further enriches the Unani formulary with additional formulations, continuing the effort to standardize and promote Unani medicinal practices.",
        "year": 2006,
        "genre": "Traditional Medicine",
        "format": "PDF",
        "fileSize": "15 MB",
        "rating": 4.8,
        "googleDriveLink": "https://drive.google.com/file/d/1U1NsaKfrpuTTys9JRL93pAnMTs41XLC6/view?usp=sharing"
      },
      {
        "id": 9,
        "title": "National Formulary of Unani Medicine Part 4",
        "author": "Central Council for Research in Unani Medicine (CCRUM)",
        "cover": "https://m.media-amazon.com/images/I/71-tCL0r4NL._AC_UF1000,1000_QL80_.jpg",
        "description": "Part 4 of the NFUM further enriches the Unani formulary with additional formulations, continuing the effort to standardize and promote Unani medicinal practices.",
        "year": 2006,
        "genre": "Traditional Medicine",
        "format": "PDF",
        "fileSize": "15 MB",
        "rating": 4.8,
        "googleDriveLink": "https://drive.google.com/file/d/18X4oDmOcgQ4N2VSNM8Fl5T1vxcqjebIP/view?usp=sharing"
      },{
        "id": 10,
        "title": "Unani Pharmacopoeia Part I Vol II",
        "author": "Central Council for Research in Unani Medicine (CCRUM)",
        "cover": "https://jmjstatic.jainabooks.in//img/9788191019520.jpg",
        "description": "Part II of the **Unani Pharmacopoeia** provides additional formulations and continues the effort to standardize and document Unani medicinal practices, focusing on herbs and preparations used in various treatments.",
        "year": 2007,
        "genre": "Traditional Medicine",
        "format": "PDF",
        "fileSize": "16 MB",
        "rating": 4.8,
        "googleDriveLink": "https://drive.google.com/file/d/1RMx0tfOIFQdn7cBiHeDltgBnfv5Q-VQh/view?usp=sharing"
      },
      {
        "id": 11,
        "title": "Unani Pharmacopoeia Part I Vol IV",
        "author": "Central Council for Research in Unani Medicine (CCRUM)",
        "cover": "https://www.saujanyabooks.com/siteadmin/image/Large/22921.gif",
        "description": "Volume IV of the **Unani Pharmacopoeia** further enriches the Unani formulary with additional formulations, continuing the effort to standardize and promote Unani medicinal practices.",
        "year": 2008,
        "genre": "Traditional Medicine",
        "format": "PDF",
        "fileSize": "18 MB",
        "rating": 4.8,
        "googleDriveLink": "https://drive.google.com/file/d/1CG-WBLc5CSVxRwdPd4N9szH8TefQNgf5/view?usp=sharing"
      },
      {
        "id": 12,
        "title": "Unani Pharmacopoeia Part I Vol V",
        "author": "https://www.saujanyabooks.com/siteadmin/image/Large/10799.gif",
        "cover": "https://m.media-amazon.com/images/I/71-tCL0r4NL._AC_UF1000,1000_QL80_.jpg",
        "description": "Volume V of the **Unani Pharmacopoeia** includes a further collection of remedies and formulations, offering comprehensive knowledge on the therapeutic applications of Unani medicine.",
        "year": 2009,
        "genre": "Traditional Medicine",
        "format": "PDF",
        "fileSize": "17 MB",
        "rating": 4.8,
        "googleDriveLink": "https://drive.google.com/file/d/11czW7yHRtUzOp3WMirGDjVS3c2GM7tD9/view?usp=sharing"
      },
      {
        "id": 13,
        "title": "Unani Pharmacopoeia Part I Vol VI",
        "author": "Central Council for Research in Unani Medicine (CCRUM)",
        "cover": "https://m.media-amazon.com/images/I/81qghGrI-nL._UF1000,1000_QL80_.jpg",
        "description": "Volume VI of the **Unani Pharmacopoeia** completes the comprehensive guide on Unani medicinal formulations, offering insight into advanced formulations and their applications in traditional healing.",
        "year": 2010,
        "genre": "Traditional Medicine",
        "format": "PDF",
        "fileSize": "19 MB",
        "rating": 4.8,
        "googleDriveLink": "https://drive.google.com/file/d/19ww9cCyOSPidwGTgOisySYgaCdvrDx3D/view?usp=sharing"
      },
      {
        "id": 14,
        "title": "Unani Pharmacopoeia Part II Vol 1",
        "author": "Central Council for Research in Unani Medicine (CCRUM)",
        "cover": "https://www.saujanyabooks.com/siteadmin/image/Large/10799.gif",
        "description": "Part II Vol 1 of the **Unani Pharmacopoeia** introduces a new series of formulations that expand on the diverse medicinal practices in Unani, focusing on specific herbal treatments and their therapeutic uses.",
        "year": 2011,
        "genre": "Traditional Medicine",
        "format": "PDF",
        "fileSize": "16 MB",
        "rating": 4.8,
        "googleDriveLink": "https://drive.google.com/file/d/1j21sEfs6FYcOYSLBySkIhNSEY4gnWVfJ/view?usp=sharing"
      },
      {
        "id": 15,
        "title": "Unani Pharmacopoeia Part II Vol 2",
        "author": "Central Council for Research in Unani Medicine (CCRUM)",
        "cover": "https://www.saujanyabooks.com/siteadmin/image/Large/10799.gif",
        "description": "Part II Vol 2 of the **Unani Pharmacopoeia** continues to document important Unani formulations, with an emphasis on the practical application of remedies for common ailments.",
        "year": 2012,
        "genre": "Traditional Medicine",
        "format": "PDF",
        "fileSize": "17 MB",
        "rating": 4.8,
        "googleDriveLink": "https://drive.google.com/file/d/1onuaGtU-MaYFp2mnuPGLjUZ9lA1nyfcI/view?usp=sharing"
      },
      {
        "id": 16,
        "title": "Unani Pharmacopoeia Part II Vol 3",
        "author": "Central Council for Research in Unani Medicine (CCRUM)",
        "cover": "https://www.saujanyabooks.com/siteadmin/image/Large/10799.gif",
        "description": "Part II Vol 3 of the **Unani Pharmacopoeia** presents an advanced collection of formulations, focusing on strengthening the understanding of Unani medicinal principles and their application in modern healthcare.",
        "year": 2013,
        "genre": "Traditional Medicine",
        "format": "PDF",
        "fileSize": "18 MB",
        "rating": 4.8,
        "googleDriveLink": "https://drive.google.com/file/d/169w-YkHHio_SFE_ANkR2A5-vraVZqEmj/view?usp=sharing"
      }
    // ... other books (content preserved but truncated for readability)
  ]);

  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isHovered, setIsHovered] = useState<number | null>(null);
  // Initialize windowWidth with 0, we'll set it properly in useEffect
  const [windowWidth, setWindowWidth] = useState<number>(0);
  // Set a default viewMode that doesn't depend on window
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  // Add a mounting state to handle client-side rendering only
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    // Mark component as mounted
    setIsMounted(true);
    
    // Now it's safe to access window
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Adjust view mode based on screen width
      if (window.innerWidth < 640) {
        setViewMode('list');
      } else {
        // Only change to grid if it was previously changed due to small screen
        if (viewMode === 'list' && windowWidth === 0) {
          setViewMode('grid');
        }
      }
    };

    // Initial call to set values
    handleResize();
    
    // Set up event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);  // Empty dependency array means this runs once after mount

  const genres = ["All", ...new Set(books.map(book => book.genre))];

  const filteredBooks = books.filter(book => {
    const matchesGenre = selectedGenre === "All" || book.genre === selectedGenre;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  const handleDownload = (bookId: number) => {
    const book = books.find(b => b.id === bookId);
    if (book && book.googleDriveLink) {
      window.location.href = book.googleDriveLink;  // Redirect to Google Drive link
    } else {
      alert(`Download link not available for "${book?.title || ''}"`);
    }
  };
  
  const StarRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-lg ${
            i < fullStars 
              ? 'text-yellow-400' 
              : (i === fullStars && hasHalfStar) 
                ? 'text-yellow-300' 
                : 'text-gray-300'
          }`}>
            ★
          </span>
        ))}
        <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>
    );
  };

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const BookCard = ({ book, viewMode }: { book: Book; viewMode: 'grid' | 'list' }) => {
    // Only calculate these values if client-side
    const isSmallScreen = isMounted && windowWidth < 640;
    const isMediumScreen = isMounted && windowWidth >= 640 && windowWidth < 1024;
    
    if ((viewMode === 'list' || isSmallScreen) && isMounted) {
      return (
        <div 
          className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row transform transition-all duration-300 hover:shadow-xl mb-4"
          style={{
            transform: isHovered === book.id ? 'translateY(-2px)' : 'none'
          }}
          onMouseEnter={() => setIsHovered(book.id)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className="w-full sm:w-1/3 md:w-1/4">
            <img 
              src={book.cover}
              alt={`Cover of ${book.title}`}
              className="w-full h-40 sm:h-full object-cover"
            />
          </div>
          <div className="p-4 sm:p-6 flex-1 flex flex-col">
            <div>
              <h2 className="text-xl font-bold text-indigo-900 mb-1 line-clamp-1">{book.title}</h2>
              <p className="text-indigo-700 mb-1">by {book.author}</p>
              <div className="mb-2">
                <StarRating rating={book.rating} />
              </div>
              <p className="text-xs text-gray-500 mb-2">{book.year} • {book.genre}</p>
              {!isSmallScreen && (
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{book.description}</p>
              )}
              <div className="flex gap-3 text-xs text-gray-700 mb-3">
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {book.format}
                </span>
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                  {book.fileSize}
                </span>
              </div>
            </div>
            <div className="mt-auto">
              <button 
                onClick={() => handleDownload(book.id)}
                className="w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg transition-colors font-medium shadow-md flex items-center justify-center gap-2 text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div 
        className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transform transition-all duration-300 hover:shadow-xl h-full"
        style={{
          transform: isHovered === book.id ? 'translateY(-5px)' : 'none'
        }}
        onMouseEnter={() => setIsHovered(book.id)}
        onMouseLeave={() => setIsHovered(null)}
      >
        <div className="p-6 flex flex-col gap-4 h-full">
          <div className="flex justify-center">
            <img 
              src={book.cover} 
              alt={`Cover of ${book.title}`} 
              className="h-48 md:h-56 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <h2 className="text-xl font-bold text-indigo-900 mb-1 line-clamp-1">{book.title}</h2>
            <p className="text-indigo-700 mb-1">by {book.author}</p>
            <div className="mb-2">
              <StarRating rating={book.rating} />
            </div>
            <p className="text-xs text-gray-500 mb-2">{book.year} • {book.genre}</p>
            <p className="text-sm text-gray-600 mb-3 line-clamp-3">
              {isMounted && isMediumScreen ? truncateText(book.description, 100) : book.description}
            </p>
            <div className="flex gap-3 text-xs text-gray-700 mb-3">
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {book.format}
              </span>
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
                {book.fileSize}
              </span>
            </div>
          </div>
          <div className="mt-auto pt-2 border-t border-indigo-50">
            <button 
              onClick={() => handleDownload(book.id)}
              className="w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg transition-colors font-medium shadow-md flex items-center justify-center gap-2 text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Show a simple loading state if not mounted yet
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 mb-1 sm:mb-2">Digital Library</h1>
            <p className="text-base sm:text-lg text-indigo-600">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 mb-1 sm:mb-2">Digital Library</h1>
          <p className="text-base sm:text-lg text-indigo-600">Discover, explore, and download your next favorite read</p>
        </div>
        
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg mb-6 sm:mb-8 border border-indigo-100">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search by title or author..."
                className="w-full pl-10 pr-4 py-2 sm:py-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 sm:gap-3">
              <div className="w-full sm:w-48">
                <select 
                  className="w-full py-2 sm:py-3 px-4 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%236366f1'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E\")", backgroundPosition: "right 1rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "3rem"}}
                >
                  {genres.map(genre => (
                    <option key={genre} value={genre}>{genre}</option>
                  ))}
                </select>
              </div>
              <div className="hidden sm:flex border border-indigo-200 rounded-lg overflow-hidden">
                <button
                  className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-700' : 'bg-white text-gray-500'}`}
                  onClick={() => setViewMode('grid')}
                  title="Grid View"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  className={`px-3 py-2 ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-700' : 'bg-white text-gray-500'}`}
                  onClick={() => setViewMode('list')}
                  title="List View"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {viewMode === 'grid' && windowWidth >= 640 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map(book => (
              <BookCard key={book.id} book={book} viewMode={viewMode} />
            ))}
          </div>
        ) : (
          <div>
            {filteredBooks.map(book => (
              <BookCard key={book.id} book={book} viewMode="list" />
            ))}
          </div>
        )}
        
        {filteredBooks.length === 0 && (
          <div className="text-center py-10 sm:py-16 bg-white rounded-xl shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 mx-auto text-indigo-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="text-lg sm:text-xl text-gray-600 mb-2">No books found</p>
            <p className="text-sm sm:text-base text-gray-500">Try adjusting your search or filter to find what you&apos;re looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDownloadPage;
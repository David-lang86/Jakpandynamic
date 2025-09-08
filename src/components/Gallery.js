import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;
  
  // Fixed 40 Projects - image paths corrected
  const projects = [
    // Ongoing Projects (20)
    { id: 1, title: 'Commercial Office Plumbing', category: 'ongoing', image: 'pictures/smile.jpg' },
    { id: 2, title: 'Residential Complex Installation', category: 'ongoing', image: 'pictures/construction.jpg' },
    { id: 3, title: 'Shopping Center Plumbing', category: 'ongoing', image: 'pictures/construction.jpg' },
    { id: 4, title: 'Hotel Renovation Project', category: 'ongoing', image: 'pictures/construction.jpg' },
    { id: 5, title: 'Industrial Pipe System', category: 'ongoing', image: 'pictures/construction.jpg' },
    { id: 6, title: 'Apartment Building Plumbing', category: 'ongoing', image: 'pictures/construction.jpg' },
    { id: 7, title: 'School Water System', category: 'ongoing', image: 'pictures/p.jpg' },
    { id: 8, title: 'Hospital Plumbing Upgrade', category: 'ongoing', image: 'pictures/pe.jpg' },
    { id: 9, title: 'Restaurant Kitchen Plumbing', category: 'ongoing', image: 'pictures/peo.jpg' },
    { id: 10, title: 'Warehouse Drainage System', category: 'ongoing', image: 'pictures/peop.jpg' },
    { id: 11, title: 'University Campus Plumbing', category: 'ongoing', image: 'pictures/peopl.jpg' },
    { id: 12, title: 'Sports Complex Installation', category: 'ongoing', image: 'pictures/people.jpg' },
    { id: 13, title: 'Mall Water System', category: 'ongoing', image: 'pictures/pep.jpg' },
    { id: 14, title: 'Theater Plumbing Upgrade', category: 'ongoing', image: 'pictures/pool.jpg' },
    { id: 15, title: 'Library Water System', category: 'ongoing', image: 'pictures/pp.jpg' },
    { id: 16, title: 'Museum Plumbing Project', category: 'ongoing', image: 'pictures/ppe.jpg' },
    { id: 17, title: 'Convention Center Plumbing', category: 'ongoing', image: 'pictures/weild.jpg' },
    { id: 18, title: 'Office Tower Installation', category: 'ongoing', image: 'pictures/weilds.jpg' },
    { id: 19, title: 'Retail Store Plumbing', category: 'ongoing', image: 'pictures/work.jpg' },
    { id: 20, title: 'Car Dealership Plumbing', category: 'ongoing', image: 'pictures/workers.jpg' },

    // Completed Projects (20)
    { id: 21, title: 'Modern Kitchen Installation', category: 'completed', image: 'pictures/sharp.jpg' },
    { id: 22, title: 'Bathroom Renovation', category: 'completed', image: 'pictures/we.jpg' },
    { id: 23, title: 'Pipe System Installation', category: 'completed', image: 'pictures/wee.jpg' },
    { id: 24, title: 'Water Heater Repair', category: 'completed', image: 'pictures/wei.jpg' },
    { id: 25, title: 'Drainage System', category: 'completed', image: 'pictures/weil.jpg' },
    { id: 26, title: 'Luxury Villa Plumbing', category: 'completed', image: 'pictures/weild.jpg' },
    { id: 27, title: 'Restaurant Plumbing', category: 'completed', image: 'pictures/weilds.jpg' },
    { id: 28, title: 'Hotel Bathroom Upgrade', category: 'completed', image: 'pictures/work.jpg' },
    { id: 29, title: 'Office Building Plumbing', category: 'completed', image: 'pictures/workers.jpg' },
    { id: 30, title: 'Garden Irrigation System', category: 'completed', image: 'pictures/pool.jpg' },
    { id: 31, title: 'Swimming Pool Plumbing', category: 'completed', image: 'pictures/pool.jpg' },
    { id: 32, title: 'Basement Waterproofing', category: 'completed', image: 'pictures/pool.jpg' },
    { id: 33, title: 'Laundry Room Installation', category: 'completed', image: 'pictures/pool.jpg' },
    { id: 34, title: 'Bar Plumbing System', category: 'completed', image: 'pictures/work.jpg' },
    { id: 35, title: 'Spa Plumbing Installation', category: 'completed', image: 'pictures/work.jpg' },
    { id: 36, title: 'Gym Shower Installation', category: 'completed', image: 'pictures/work.jpg' },
    { id: 37, title: 'Cafe Plumbing System', category: 'completed', image: 'pictures/work.jpg' },
    { id: 38, title: 'Bakery Water System', category: 'completed', image: 'pictures/workers.jpg' },
    { id: 39, title: 'Butchery Plumbing', category: 'completed', image: 'pictures/pool.jpg' },
    { id: 40, title: 'Photography Studio Plumbing', category: 'completed', image: 'pictures/construction.jpg' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2>Our Projects Gallery</h2>
        <p className="gallery-subtitle">Showing {filteredProjects.length} projects across all categories</p>
        
        <div className="gallery-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => { setActiveFilter('all'); setCurrentPage(1); }}
          >
            All Projects ({projects.length})
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'ongoing' ? 'active' : ''}`}
            onClick={() => { setActiveFilter('ongoing'); setCurrentPage(1); }}
          >
            Ongoing ({projects.filter(p => p.category === 'ongoing').length})
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'completed' ? 'active' : ''}`}
            onClick={() => { setActiveFilter('completed'); setCurrentPage(1); }}
          >
            Completed ({projects.filter(p => p.category === 'completed').length})
          </button>
        </div>

        <div className="gallery-grid">
          {currentProjects.map(project => (
            <div key={project.id} className="gallery-item">
              <img src={project.image} alt={project.title} />
              <div className="gallery-item-info">
                <h3>{project.title}</h3>
                <p className={`project-status ${project.category}`}>
                  {project.category === 'ongoing' ? '🟡 Ongoing Project' : '✅ Completed Project'}
                </p>
                <p className="project-id">Project #{project.id}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {filteredProjects.length > projectsPerPage && (
          <div className="pagination">
            <button 
              onClick={prevPage} 
              disabled={currentPage === 1}
              className="pagination-btn"
            >
              ← Previous
            </button>
            
            <div className="pagination-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`pagination-btn ${currentPage === number ? 'active' : ''}`}
                >
                  {number}
                </button>
              ))}
            </div>
            
            <button 
              onClick={nextPage} 
              disabled={currentPage === totalPages}
              className="pagination-btn"
            >
              Next →
            </button>
          </div>
        )}

        <div className="gallery-stats">
          <p>Showing projects {indexOfFirstProject + 1} to {Math.min(indexOfLastProject, filteredProjects.length)} of {filteredProjects.length}</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

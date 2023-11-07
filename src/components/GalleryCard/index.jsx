export default function GalleryCard({ char, onEdit, onDelete }) {
  const handleEditClick = () => {
    onEdit(char.id); 
  };

  const handleDeleteClick = () => {
    onDelete(char.id); 
  };

  return (
    <div className="gallery-image">
      <div>
        <h2>{char.name}</h2>
        <span>{char.age}</span>
        <p>{char.catch_phrase}</p>
        <button className="button" onClick={handleEditClick}>Edit</button>
        <button className="button" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

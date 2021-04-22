import { React } from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import { projectFirestore } from '../firebase/config';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  const deleteImage = (id) => projectFirestore.collection('images').doc(id).delete();
  const updateLike = (id,liked) => {
    const ref = projectFirestore.collection('images').doc(id);
    if(liked === "")
      ref.update({ liked: "Liked" });
    else
      ref.update({ liked: "" });
  }
  
  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <motion.div className="img-wrap" key={doc.id} 
          layout
          whileHover={{ opacity: 1 }}s>
          <img src={doc.url} alt="uploaded pic" onClick={() => setSelectedImg(doc.url)}/>
            <div class="like-bar">
              <button className="like-button" onClick={ () => updateLike(doc.id,doc.liked) }>&#129293;</button>
              <p className="like">{doc.liked}</p>
              <button className="like-delete" onClick={ () => deleteImage(doc.id)} >&#128465;</button>
            </div> 
            
        </motion.div> 
      ))}
    </div>
  )
}

export default ImageGrid;
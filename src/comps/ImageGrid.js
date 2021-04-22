import { React, useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  const [likes,setLikes] = useState(0);

  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <motion.div className="img-wrap" key={doc.id} 
          layout
          whileHover={{ opacity: 1 }}s>
          <motion.img src={doc.url} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => setSelectedImg(doc.url)}/>
            <div class="like-bar">
              <button className="like-button" onClick={ () => setLikes(likes+1) }>&#129293;</button>
              <p className="like">{likes} Likes</p>
              <button className="like-delete">&#128465;</button>
            </div> 
            
        </motion.div> 
      ))}
    </div>
  )
}

export default ImageGrid;
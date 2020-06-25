import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { DropzoneArea } from 'material-ui-dropzone';

const NewPost = () => {
  const [file, setFile] = useState('');
  const [name, SetName] = useState('');
  const [description, setDescripton] = useState('');

  return (
    <form>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="description"
        label="Description"
        value={description}
        type="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <DropzoneArea onChange={(e) => setFile(e.target.value)} />
    </form>
  )
}

export default NewPost
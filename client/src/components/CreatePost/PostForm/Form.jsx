import React from 'react';

import FileBase64 from 'react-file-base64';

import { Avatar, Button, Divider, FormLabel, TextField, Tooltip, Typography } from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import useStyles from './styles';

const Form = ({ handleSubmit, inputs, setInputs, setImage, image, handlePush, isFormEmpty }) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.avatar}>
                <Avatar style={{ backgroundColor: '#3492ca' }}>
                    <AddCircleOutlineRoundedIcon />
                </Avatar>
            </div>
            <Typography variant='h6' color='primary' align='center' gutterBottom>
                Create Post
            </Typography>
            <form onSubmit={handleSubmit} autoComplete='off' noValidate>
                <TextField
                    name='title'
                    label='Post Title'
                    value={inputs.title}
                    onChange={setInputs}
                    fullWidth
                    required
                    sx={{ pb: 2 }}
                />
                <TextField
                    name='body'
                    label='Post Body'
                    value={inputs.body}
                    onChange={setInputs}
                    rows={2}
                    multiline
                    fullWidth
                    required
                />
                <div className={classes.formlabel}>
                    <FormLabel>Post Image:</FormLabel>
                    <Divider variant='fullWidth' />
                    <div className={classes.input}>
                        <FileBase64
                            multiple={false}
                            onDone={({ base64 }) => setImage({ ...image, base64 })}
                        />
                    </div>
                </div>
                <div className={classes.savebutton}>
                    <Tooltip
                        title='Fill the form to save'
                        open={isFormEmpty ? false : true}
                        disableInteractive
                        arrow
                    >
                        <Button
                            type='submit'
                            variant='contained'
                            onClick={() => handlePush('home', 1000)}
                            disabled={isFormEmpty ? false : true}
                            fullWidth
                        >
                            Save
                        </Button>
                    </Tooltip>
                </div>
            </form>
        </>
    );
};

export default Form;

import React from 'react';

import { Button } from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import useStyles from './styles';

const Buttons = ({ isEditing, id, handleDelete, handleEditClick }) => {
    const classes = useStyles();

    return (
        <div className={classes.buttons}>
            {isEditing && (
                <>
                    <Button onClick={() => handleEditClick(id)} size='large'>
                        <CreateRoundedIcon />
                    </Button>
                    <Button onClick={() => handleDelete(id)} color='error' size='large'>
                        <DeleteRoundedIcon />
                    </Button>
                </>
            )}
        </div>
    );
};

export default Buttons;

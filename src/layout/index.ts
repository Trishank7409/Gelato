import {  Theme } from "@mui/material";
import { makeStyles, createStyles } from '@mui/styles';


export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: 'red',
            padding: theme.spacing(2),
          },
       subHeaderText:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
       },
       homePageHeading:{
        fontFamily: 'GelatoSans-Medium, sans-serif !important',
        fontSize: '60px !important',
        lineHeight: '68px !important',
        fontWeight: '600 !important',
        color: '#212121',
       },

       text:{
        fontFamily: 'GelatoSans-Light, sans-serif !important',
        fontSize: '24px !important',
        fontWeight: '500 !important',
        color: '#212121 !important',
        width: '80%',
       }
    }));
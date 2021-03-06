import * as React from "react";
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';
import MyUrlField from './MyUrlField';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);
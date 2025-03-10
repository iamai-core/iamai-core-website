import * as React from 'react';
import type * as types from 'types';
import { Link } from '../../atoms/Link';

import MuiAppBar from '@mui/material/AppBar';
import MuiBox from '@mui/material/Box';
import MuiToolbar from '@mui/material/Toolbar';
import MuiTypography from '@mui/material/Typography';

// Update Props type to include logo
export type Props = types.Header & types.StackbitObjectId & {
    logo?: {
        type: string;
        url: string;
        altText?: string;
        width?: number;
        height?: number;
    };
};

export const Header: React.FC<Props> = (props) => {
    const { title, logo, navLinks = [], 'data-sb-object-id': objectId } = props;
    const fieldPath = objectId ? `${objectId}:header` : null;
    return (
        <MuiAppBar position="static" color="transparent" elevation={0} data-sb-field-path={fieldPath}>
            <MuiToolbar disableGutters={true} sx={{ flexWrap: 'wrap' }}>
                <MuiBox sx={{ mb: 1, mr: 2, flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    {logo && (
                        <MuiBox
                            component="img"
                            src={logo.url}
                            alt={logo.altText || 'Logo'}
                            sx={{
                                height: logo.height || 32,
                                width: logo.width || 32,
                                mr: 1
                            }}
                            data-sb-field-path=".logo"
                        />
                    )}
                    {title && (
                        <MuiTypography component="p" variant="h6" color="text.primary" noWrap data-sb-field-path=".title">
                            {title}
                        </MuiTypography>
                    )}
                </MuiBox>
                {navLinks.length > 0 && (
                    <MuiBox component="nav" sx={{ display: 'flex', flexWrap: 'wrap' }} data-sb-field-path=".navLinks">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                {...link}
                                sx={{
                                    ...(index !== navLinks.length - 1 && { mr: 2 }),
                                    mb: 1
                                }}
                                data-sb-field-path={`.${index}`}
                            />
                        ))}
                    </MuiBox>
                )}
            </MuiToolbar>
        </MuiAppBar>
    );
};

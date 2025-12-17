import { Box, Typography } from "@mui/material";

   export const paragraphStyle = {
        color: '#000000',
        fontSize: { xs: '15px', md: '30px' },
        fontWeight: '400',
        //lineHeight: 'normal',
        lineHeight: {xs: "25px", md: "40px" },
    };

    export const renderers = {
        p: ({ node, ...props }) => (
            <Typography sx={{ ...paragraphStyle, color: "inherit" }} {...props} component="div" />
        ),
        
        strong: ({ node, ...props }) => (
            <strong style={{ fontWeight: 700 }} {...props} />
        ),
        
        ol: ({ node, ...props }) => (
            <Box 
                component="ol" 
                sx={{ ml: 4, listStyleType: 'decimal', ...paragraphStyle }} 
                {...props} 
            />
        ),
        
        ul: ({ node, ...props }) => (
            <Box 
                component="ul" 
                sx={{ ml: 4, listStyleType: 'disc', ...paragraphStyle }} 
                {...props} 
            />
        ),

        li: ({ node, ...props }) => (
            <Typography 
                component="li" 
                sx={{ 
                    ...paragraphStyle, 
                    ml: 0 
                }} 
                {...props} 
            />
        ),
        
        h2: ({ node, ...props }) => (
             <Typography variant="h4" sx={{ ...paragraphStyle, fontWeight: 700, mt: 4, mb: 2 }} {...props} />
        ),
        
        em: ({ node, ...props }) => (
            <em style={{ fontStyle: 'italic' }} {...props} />
        ),

    };

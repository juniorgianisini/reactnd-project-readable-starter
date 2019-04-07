export default (theme) => ({
    post_card: {
        marginTop: 10
    },

    posts: {
        marginTop: 10, 
        margin: 10
    },

    comment_card: {
        margin: 10
    },
    
    comments: {
        marginTop: 10, 
        margin: 10
    },

    action_bar: {
        marginLeft: 'auto',
    },

    category_root: {
        flexGrow: 1
    },
 
    category_grid: {
        direction: "column"
    },

    main_bar: {
        justifyContent: 'space-between',
    },

    breadcrumbs_paper: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
});
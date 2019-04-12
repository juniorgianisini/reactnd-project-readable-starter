export default (theme) => ({
    post_card: {
        marginTop: 10
    },

    posts: {
        marginTop: 10, 
    },

    comment_card: {
        margin: 10
    },
    
    comments: {
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
        height: 60
    },

    main_bar_title: {
        margin: 10
    },

    breadcrumbs_paper: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },

    select_header: {
        color: 'White',
        width: 130
    },

    fab_header: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed'
    },

    post_form_item: {
        margin: 10
    }
});
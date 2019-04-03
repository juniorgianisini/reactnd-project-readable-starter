export default (theme) => ({
    post_paper: {
        padding: theme.spacing.unit * 2,
        textAlign: "left",
        color: theme.palette.text.secondary,
        margimTop: 10,
        marginBottom: 10
    },

    comment_paper: {
        padding: theme.spacing.unit * 1,
        textAlign: "left",
        color: theme.palette.text.secondary,
    },

    category_root: {
        flexGrow: 1
    },
 
    category_grid: {
        direction: "column"
        //marginLeft: 20,
        //marginRight: 20
    }
});
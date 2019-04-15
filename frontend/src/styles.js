import { fade } from "@material-ui/core/styles/colorManipulator";

const drawerWidth = 240;

export default theme => ({
    post: {
        margin: 10
    },

    list_posts_grid: {
        spacing: 12
    },

    comment: {
        margin: 10
    },

    action_bar: {
        marginLeft: "auto"
    },

    category_root: {
        flexGrow: 1
    },

    category_grid: {
        direction: "column"
    },

    header: {
    },

    header_appbar: {
        height: 60
    },

    header_toolbar: {
        justifyContent: "space-between"
    },

    header_title: {
        margin: 10
    },

    header_orderby_hide: {
        display: 'none'
    },

    header_orderby: {
        color: "White",
        width: 130,
        marginRight: 10,
        marginLeft: 10
    },

    header_columnsview_hide: {
        display: 'none'
    },

    header_columnsview: {
    },

    header_appbar_: {
        height: 60,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },

    header_appbar_shift: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },

    header_button: {
        marginLeft: -5,
        marginRight: 20
    },

    header_button_hide: {
        display: "none"
    },

    header_drawer: {
        width: drawerWidth,
        flexShrink: 0
    },

    header_drawer_paper: {
        width: drawerWidth
    },

    header_drawer_headers: {
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },

    header_drawer_icon_avatar: {
        marginRight: 30,
        width: 100,
        height: 100
    },

    header_drawer_list: {
        margin: 10
    },

    header_breadcrumbs: {
        padding: 5,
        paddingLeft: 10,
        backgroundColor: "rgb(245, 241, 241)"
    },

    header_search_hide: {
        display: 'none'
    },

    header_search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing.unit * 3,
            width: "auto"
        }
    },

    header_search_icon: {
        width: theme.spacing.unit * 9,
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    header_input_root: {
        color: "inherit",
        width: "100%"
    },

    header_input_input: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: 200
        }
    },

    header_actions_grow: {
        flexGrow: 1
    },

    app_content: {
        flexGrow: 1,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: 0
    },

    app_content_shift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: drawerWidth
    },

    fab_add: {
        margin: 0,
        top: "auto",
        right: 20,
        bottom: 20,
        left: "auto",
        position: "fixed"
    },

    post_form_item: {
        margin: 10
    }
});

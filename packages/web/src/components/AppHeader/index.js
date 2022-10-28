// import AppNavigation from '@components/AppNavigation'
// import styles, { GLOBAL_SCROLL_PADDING_CSS } from './styles'


const AppHeader = props => (
    <header role='banner' >
        <AppNavigation {...props} />
        {this.props.children}
    </header>
)

export default AppHeader
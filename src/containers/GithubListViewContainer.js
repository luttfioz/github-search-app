import { connect } from 'react-redux'
import GithubListView from '../components/GithubListView'


const mapStateToProps = state => ({
    gitData: state.gitData,
    searchType: state.searchType
})

const mapDispatchToProps = dispatch => ({
})

export const GithubListViewContainer = connect(mapStateToProps, mapDispatchToProps)(GithubListView)
import { connect } from 'react-redux'
import { getGitData } from '../store/actions/GitData'
import { getSearchType } from '../store/actions/SearchType'
import GithubFormView from '../components/GithubFormView'


const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => (
    {
        getGitData: (searchType, searchArea) => dispatch(getGitData(searchType, searchArea)),
        getSearchType: (searchType) => dispatch(getSearchType(searchType))
    }
)

export const GithubFormViewContainer = connect(mapStateToProps, mapDispatchToProps)(GithubFormView)
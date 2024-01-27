
export const LOGIN_STATUS = {
    PENDING: 'pending',
    NOT_LOGGED_IN : 'notLoggedIn',
    IS_LOGGED_IN : 'loggedIn',
};


export const MESSAGES = {
    default: 'Something went wrong. Please try again'
}

export const ACTIONS = {
    LOG_IN: 'logIn',
    LOG_OUT: 'logOut',
    START_LOADING_POSTINGS: 'startLoadingPostings',
    REPORT_ERROR: 'reportError',
    ADD_POSTING: 'addPosting',
    REPLACE_POSTINGS: 'replacePostings',
    LOGIN_PENDING:'loginPending',
    UPDATE_USER_TYPE: 'updateUserType',
    APPLY_FILERS: 'applyFilters',
    NEW_USER: 'newUser',
    SET_COMPONENT: 'setComponent',
    NOT_NEW_USER: 'notNewUser',
    NO_ERROR: 'noError',
    SET_RECRUITER_POSTINGS: 'setRecruiterPostings',
    SET_MY_APPLICATIONS: 'setMyApplications',
    DELETE_MY_APPLICATIONS: 'setMyApplications',
    SHOW_MESSAGE: 'showMessage'
};

export const USER_TYPES = {
    RECRUITER : 'recruiter',
    APPLICANT : 'applicant',
    NEW_USER: 'newUser'
}

export const COMPONENTS = {
    ABOUT : 'about',
    HOME : 'home',
    ALL_JOBS : 'allJobs',
    POST_JOB : 'postJob',
    REGISTER: 'register',
    PROFILE: 'profile',
    MY_POSTINGS: 'myPostings',
    MY_APPLICATIONS: 'myApplications'
}
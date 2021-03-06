import React from 'react'
import PropTypes from 'prop-types'

import Confirmation from '../../Confirmation'

const CompanySignupConfirmation = ({
  onBackToLogin,
  t,
}) => (
  <Confirmation
    labels={{
      backToLogin: t('back_login_action'),
      confirmation: t('sign_up.company.confirmation'),
      confirmationEmphasis: t('sign_up.company.confirmation_emphasis'),
    }}
    onBackToLogin={onBackToLogin}
  />
)

CompanySignupConfirmation.propTypes = {
  onBackToLogin: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

export default CompanySignupConfirmation

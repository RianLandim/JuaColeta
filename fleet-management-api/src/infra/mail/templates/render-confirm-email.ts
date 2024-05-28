import { render } from '@react-email/components';
import ConfirmEmail from '@infra/mail/templates/confirm-email';

export const renderConfirm = () => render(ConfirmEmail());

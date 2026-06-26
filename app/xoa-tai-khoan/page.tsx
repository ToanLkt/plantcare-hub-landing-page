import { AccountDeletionForm } from '@/components/AccountDeletionForm';

export const metadata = {
  title: 'Xóa tài khoản PlantCare Hub',
  description: 'Xóa tài khoản PlantCare Hub đang đăng nhập.',
};

export default function DeleteAccountPage() {
  return <AccountDeletionForm />;
}

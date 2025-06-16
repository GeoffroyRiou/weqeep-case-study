type AlertMessageProps = {
  message: string;
  type?: 'info' | 'warning' | 'error' | 'success';
};
const AlertMessage = (props: AlertMessageProps) => {

  const typeClasses = {
    info: 'text-blue-600 bg-blue-100 border-blue-300',
    warning: 'text-yellow-600 bg-yellow-100 border-yellow-300',
    error: 'text-red-600 bg-red-100 border-red-300',
    success: 'text-green-600 bg-green-100 border-green-300',
  };

  return (
    <div className={typeClasses[props.type || 'info'] + ' border-l-4 p-4 mb-4'}>
      {props.message}
    </div>
  );
}
export default AlertMessage;
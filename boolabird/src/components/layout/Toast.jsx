import { useEffect } from "react";
import { CheckCircle, XCircle, AlertCircle, X } from "lucide-react";

const Toast = ({ toast, onClose }) => {
  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        onClose();
      }, toast.duration || 5000);

      return () => clearTimeout(timer);
    }
  }, [toast.visible, toast.duration, onClose]);

  if (!toast.visible) return null;

  const getIcon = () => {
    switch (toast.type) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case "error":
        return <XCircle className="w-5 h-5 text-red-400" />;
      case "warning":
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      default:
        return <CheckCircle className="w-5 h-5 text-green-400" />;
    }
  };

  const getBgColor = () => {
    switch (toast.type) {
      case "success":
        return "bg-green-50 border-green-200";
      case "error":
        return "bg-red-50 border-red-200";
      case "warning":
        return "bg-yellow-50 border-yellow-200";
      default:
        return "bg-green-50 border-green-200";
    }
  };

  const getTextColor = () => {
    switch (toast.type) {
      case "success":
        return "text-green-800";
      case "error":
        return "text-red-800";
      case "warning":
        return "text-yellow-800";
      default:
        return "text-green-800";
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className={`flex items-center p-4 rounded-lg border ${getBgColor()} shadow-lg max-w-md`}>
        <div className="flex-shrink-0 mr-3">
          {getIcon()}
        </div>
        <div className={`flex-1 text-sm font-medium ${getTextColor()}`}>
          {toast.message}
        </div>
        <button
          onClick={onClose}
          className={`ml-4 flex-shrink-0 ${getTextColor()} hover:opacity-75`}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
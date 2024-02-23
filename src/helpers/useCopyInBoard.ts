import toast from "react-hot-toast";

const useCopyInBoard = () => {
  const useCopy = async (text: any) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Текст успешно скопирован в буфер обмена');
    } catch (err) {
      toast.error('Ошибка при копировании текста')
    }
  };

  return useCopy
};

export { useCopyInBoard }
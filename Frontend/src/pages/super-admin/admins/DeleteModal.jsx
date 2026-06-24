import styles from "./DeleteModal.module.css";

const DeleteModal = ({
  isOpen,
  onClose,
  onDelete,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>Delete {title}</h3>

        <p>
          Are you sure you want to delete this item?
        </p>

        <div className={styles.actions}>
          <button
            className={styles.cancelBtn}
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className={styles.deleteBtn}
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
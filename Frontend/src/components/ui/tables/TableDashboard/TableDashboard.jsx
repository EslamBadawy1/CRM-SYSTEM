import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TableDashboard.module.css";

const TableDashboard = ({
  title,
  description,
  buttonText,
  buttonLink,
  columns,
  data,
  onDelete,
  onSearch,
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}) => {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        <Link to={buttonLink} className={styles.addBtn}>
          + {buttonText}
        </Link>
      </div>

      {/* Search & Filter */}
      <div className={styles.actions}>
        <div className={styles.searchWrapper}>
          <i
            className={`fa-solid fa-magnifying-glass ${styles.searchIcon}`}
          ></i>

          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </div>

        <button className={styles.filterBtn}>
          Filters
        </button>
      </div>

      {/* Table */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key}>{col.header}</th>
              ))}

              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id}>
                  {columns.map((col) => (
                    <td key={col.key}>
                      {col.key === "status" ? (
                        <span
                          className={`${styles.statusBadge} ${
                            item[col.key]?.toLowerCase() === "active"
                              ? styles.active
                              : styles.inactive
                          }`}
                        >
                          {item[col.key]}
                        </span>
                      ) : (
                        item[col.key]
                      )}
                    </td>
                  ))}

                  <td className={styles.actionCell}>
                    <button
                      className={styles.actionBtn}
                      onClick={() =>
                        setOpenMenu(
                          openMenu === item.id ? null : item.id
                        )
                      }
                    >
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>

                    {openMenu === item.id && (
                      <div className={styles.dropdown}>
                        <Link
                          to={`${item.id}`}
                          className={styles.dropdownItem}
                        >
                          <i className="fa-regular fa-eye"></i>
                          View
                        </Link>

                        <Link
                          to={`edit/${item.id}`}
                          className={styles.dropdownItem}
                        >
                          <i className="fa-regular fa-pen-to-square"></i>
                          Edit
                        </Link>

                        <button
                          className={styles.deleteBtn}
                          onClick={() => onDelete?.(item)}
                        >
                          <i className="fa-regular fa-trash-can"></i>
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className={styles.emptyState}
                >
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <button
          disabled={currentPage === 1}
          onClick={() =>
            onPageChange?.(currentPage - 1)
          }
        >
          {"<"}
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            onPageChange?.(currentPage + 1)
          }
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default TableDashboard;
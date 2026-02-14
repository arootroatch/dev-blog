import React, {useEffect, useState} from "react";
import {useCombobox} from "downshift";
import styles from "./searchBar.module.css";
import {SearchBarParams, Posts} from "@/lib/interfaces";
import Fuse from "fuse.js";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {IoIosSearch} from "react-icons/io";

export default function SearchBar({posts}: SearchBarParams) {
  const router = useRouter();
  const [inputItems, setInputItems] = React.useState(posts);
  const fuse = new Fuse(posts, {
    keys: ["data.title", "data.category"],
  });

  const [searchOpen, setSearchOpen] = useState(false);

  function toggleSearch() {
    setSearchOpen(!searchOpen);
  }

  function closeSearch() {
    if (searchOpen) setSearchOpen(!searchOpen);
  }

  function clearInputAndCloseMenu() {
    selectItem(null);
    closeMenu();
  }

  useEffect(()=>{
    const close = (e: any) => {
      if (e.key === 'Escape'){
        closeSearch();
      }
    }
    window.addEventListener('keydown', close);
    return ()=> window.removeEventListener("keydown", close)
  })

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    selectItem,
    closeMenu
  } = useCombobox({
    items: inputItems,
    itemToString: (item: Posts | null) => item ? item.data.title : "",
    onInputValueChange: ({inputValue}) => {
      let search = fuse.search(inputValue);
      let searchResults = search.map((result) => result.item);
      setInputItems(searchResults);
    },
    onSelectedItemChange: ({selectedItem}) => {
      if (selectedItem) {
        const slug = selectedItem.filePath.replace(/\.mdx?$/, "");
        clearInputAndCloseMenu();
        closeSearch();
        router.push(`/${slug}`);
      }
    },
  });
  return (
    <div className={styles.searchBarWrapper}>
      <IoIosSearch className={styles.search} onClick={toggleSearch}/>
      <div
        className={`${styles.searchBar} ${searchOpen && styles.openSearch} ${
          isOpen && styles.openSearchAndList
        }`}
      >
        <div className={styles.inputWrapper}>
          <input
            {...getInputProps()}
            placeholder='Search for an article'
            className={styles.input}
          />
        </div>
        <ul
          {...getMenuProps()}
          className={`${styles.list} ${isOpen && styles.openList}`}
        >
          {inputItems.map((item, index) => (
            <li
              style={
                highlightedIndex === index
                  ? {backgroundColor: "#bde3ff3f"}
                  : {}
              }
              key={`${item}${index}`}
              {...getItemProps({item, index})}
              className={styles.listItem}
              onClick={clearInputAndCloseMenu}
            >
              <Link onClick={toggleSearch} href={`/${item.filePath.replace(/\.mdx?$/, "")}`}>
                <div>{item.data.title}</div>
                <div className={styles.category}>{item.data.category}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

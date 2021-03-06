import React from "react"
import Link from "next/link"
import Router from "next/router"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Badge,
} from "reactstrap"

import UseWindowSize from "../hooks/UseWindowSize"

import ActiveLink from "./ActiveLink"

import menu from "../data/menu.json"

import userMenu from "../data/user-menu.json"
import Image from "./CustomImage"
import Icon from "./Icon"

const Header = (props) => {
  const [collapsed, setCollapsed] = React.useState(false)
  const [dropdownOpen, setDropdownOpen] = React.useState({})
  const [searchFocus, setSearchFocus] = React.useState(false)
  const [dropdownAnimate, setDropdownAnimate] = React.useState(false)
  const [parentName, setParentName] = React.useState(false)

  const size = UseWindowSize()

  const onFocus = () => setSearchFocus(!searchFocus)

  const toggleDropdown = (name) => {
    setDropdownOpen({ ...dropdownOpen, [name]: !dropdownOpen[name] })
  }

  const onLinkClick = (parent) => {
    size.width < 991 && setCollapsed(!collapsed)
    setParentName(parent)
  }

  // highlight not only active dropdown item, but also its parent, i.e. dropdown toggle
  const highlightDropdownParent = () => {
    menu.map((item) => {
      item.dropdown &&
        item.dropdown.map((dropdownLink) => {
          dropdownLink.link &&
            dropdownLink.link === Router.route &&
            setParentName(item.title)
          dropdownLink.links &&
            dropdownLink.links.map(
              (link) => link.link === Router.route && setParentName(item.title)
            )
        })
      item.megamenu &&
        item.megamenu.map((megamenuColumn) =>
          megamenuColumn.map((megamenuBlock) =>
            megamenuBlock.links.map((dropdownLink) => {
              if (dropdownLink.link === Router.route) {
                dropdownLink.parent
                  ? setParentName(dropdownLink.parent)
                  : setParentName(item.title)
              }
            })
          )
        )
      item.link === Router.route && setParentName(item.title)
    })
  }

  React.useEffect(highlightDropdownParent, [])
  return (
    <header
      className={`header ${props.headerClasses ? props.headerClasses : ""}`}
    >
      <Navbar
        color={props.nav.color ? props.nav.color : "white"}
        light={props.nav.light && true}
        dark={props.nav.dark && true}
        fixed={props.nav.fixed ? props.nav.fixed : "top"}
        expand="lg"
        className={props.nav.classes ? props.nav.classes : ""}
      >
        <Container fluid={true}>
          <div className="d-flex align-items-center">
            <Link href="/" passHref>
              <a className="py-1 navbar-brand">
                <img
                  src="/content/svg/SAIL.PNG"
                  width="50"
                  height="41"
                  alt="Directory logo"
                />
              </a>
            </Link>

            {/* search form */}
            <Form id="search" className="form-inline d-none d-sm-flex">
              <div
                className={`input-label-absolute input-label-absolute-left input-reset input-expand ml-lg-2 ml-xl-3 ${
                  searchFocus ? "focus" : ""
                }`}
              >
                <Label for="search_search" className="label-absolute">
                  <i className="fa fa-search"></i>
                  <span className="sr-only">What are you looking for?</span>
                </Label>
                <Input
                  id="search_search"
                  placeholder="Search"
                  aria-label="Search"
                  bsSize="sm"
                  className="border-0 shadow-0 bg-gray-200"
                  onFocus={onFocus}
                  onBlur={() => setTimeout(() => onFocus(), 333)}
                />
                <button type="reset" className="btn btn-sm btn-reset">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </Form>
          </div>
          <NavbarToggler
            onClick={() => setCollapsed(!collapsed)}
            className="navbar-toggler-right"
          >
            <i className="fa fa-bars"></i>
          </NavbarToggler>
          <Collapse isOpen={collapsed} navbar>
            {/* mobile search form */}
            <Form
              id="searchcollapsed"
              className="form-inline mt-4 mb-2 d-sm-none"
            >
              <div
                className={`input-label-absolute input-label-absolute-left input-reset w-100 ${
                  searchFocus ? "focus" : ""
                }`}
              >
                <Label for="searchcollapsed_search" className="label-absolute">
                  <i className="fa fa-search"></i>

                  <span className="sr-only">What are you looking for?</span>
                </Label>
                <Input
                  id="searchcollapsed_search"
                  placeholder="Search"
                  aria-label="Search"
                  bsSize="sm"
                  className="border-0 shadow-0 bg-gray-200"
                  onFocus={onFocus}
                  onBlur={() => setTimeout(() => onFocus(), 333)}
                />
                <Button
                  type="reset"
                  size="sm"
                  color="deoco"
                  className="btn-reset"
                >
                  <i className="fas fa-times"></i>
                </Button>
              </div>
            </Form>
            <Nav navbar className="ml-auto">
              {menu &&
                menu.map((item) =>
                  item.dropdown || item.megamenu ? (
                    // show entire menu to unlogged user or hide items that have hideToLoggedUser set to true
                    !props.loggedUser ||
                    (props.loggedUser && !item.hideToLoggedUser) ? (
                      <Dropdown
                        nav
                        inNavbar
                        key={item.title}
                        className={
                          item.position ? `position-${item.position}` : ``
                        }
                        isOpen={dropdownOpen[item.title]}
                        toggle={() => toggleDropdown(item.title)}
                      >
                        <DropdownToggle
                          nav
                          caret
                          onClick={() =>
                            setDropdownAnimate({
                              ...dropdownAnimate,
                              [item.title]: !dropdownOpen[item.title],
                            })
                          }
                          className={parentName === item.title ? "active" : ""}
                        >
                          {item.title}
                        </DropdownToggle>
                        <DropdownMenu
                          className={`${
                            dropdownAnimate[item.title] === false ? "hide" : ""
                          } ${item.megamenu ? "megamenu py-lg-0" : ""}`}
                        >
                          {item.dropdown &&
                            item.dropdown.map((dropdownItem) =>
                              dropdownItem.links ? (
                                <React.Fragment key={dropdownItem.title}>
                                  <h6 className="dropdown-header font-weight-normal">
                                    {dropdownItem.title}
                                  </h6>
                                  {dropdownItem.links.map((link) => (
                                    <ActiveLink
                                      key={link.title}
                                      activeClassName="active"
                                      href={link.link}
                                      passHref
                                    >
                                      <DropdownItem
                                        onClick={() => onLinkClick(item.title)}
                                      >
                                        {link.title}
                                        {link.new && (
                                          <Badge
                                            color="info-light"
                                            className="ml-1 mt-n1"
                                          >
                                            New
                                          </Badge>
                                        )}
                                      </DropdownItem>
                                    </ActiveLink>
                                  ))}
                                </React.Fragment>
                              ) : (
                                <ActiveLink
                                  key={dropdownItem.title}
                                  activeClassName="active"
                                  href={dropdownItem.link}
                                  passHref
                                >
                                  <DropdownItem
                                    onClick={() => onLinkClick(item.title)}
                                  >
                                    {dropdownItem.title}
                                    {dropdownItem.new && (
                                      <Badge
                                        color="info-light"
                                        className="ml-1 mt-n1"
                                      >
                                        New
                                      </Badge>
                                    )}
                                  </DropdownItem>
                                </ActiveLink>
                              )
                            )}
                          {item.megamenu && (
                            <Row>
                              <Col lg="9">
                                <Row className="p-3 pr-lg-0 pl-lg-5 pt-lg-5">
                                  {item.megamenu.map((megamenuItem, index) => (
                                    <Col key={index} lg="3">
                                      {megamenuItem.map((block, index) => (
                                        <React.Fragment key={index}>
                                          <h6 className="text-uppercase">
                                            {block.title}
                                          </h6>
                                          <ul className="megamenu-list list-unstyled">
                                            {block.links.map((link) => (
                                              <li
                                                key={link.title}
                                                className="megamenu-list-item"
                                              >
                                                <ActiveLink
                                                  activeClassName="active"
                                                  href={link.link}
                                                  as={link.as}
                                                  passHref
                                                >
                                                  <DropdownItem
                                                    className="megamenu-list-link"
                                                    onClick={() =>
                                                      link.parent
                                                        ? onLinkClick(
                                                            link.parent
                                                          )
                                                        : onLinkClick(
                                                            item.title
                                                          )
                                                    }
                                                  >
                                                    {link.title}
                                                    {link.new && (
                                                      <Badge
                                                        color="info-light"
                                                        className="ml-1 mt-n1"
                                                      >
                                                        New
                                                      </Badge>
                                                    )}
                                                  </DropdownItem>
                                                </ActiveLink>
                                              </li>
                                            ))}
                                          </ul>
                                        </React.Fragment>
                                      ))}
                                    </Col>
                                  ))}
                                </Row>
                                {item.services && (
                                  <Row className="megamenu-services d-none d-lg-flex pl-lg-5">
                                    {item.services.map((service) => (
                                      <Col
                                        key={service.title}
                                        xl="3"
                                        lg="6"
                                        className="d-flex"
                                      >
                                        <div className="megamenu-services-item">
                                          <Icon
                                            icon={service.icon}
                                            className="megamenu-services-icon"
                                          />
                                          <div>
                                            <h6 className="text-uppercase">
                                              {service.title}
                                            </h6>
                                            <p className="mb-0 text-muted text-sm">
                                              {service.content}
                                            </p>
                                          </div>
                                        </div>
                                      </Col>
                                    ))}
                                  </Row>
                                )}
                              </Col>
                              {item.image && (
                                <Col lg="3" className="d-none d-lg-block">
                                  {/* Loading eager set for IE compatibility */}
                                  <Image
                                    src={item.image}
                                    alt=""
                                    className="bg-image"
                                    loading="eager"
                                    layout="fill"
                                  />
                                </Col>
                              )}
                            </Row>
                          )}
                        </DropdownMenu>
                      </Dropdown>
                    ) : (
                      ""
                    )
                  ) : (props.loggedUser && !item.hideToLoggedUser) ||
                    !props.loggedUser ? (
                    <NavItem
                      key={item.title}
                      className={
                        item.button
                          ? "mt-3 mt-lg-0 ml-lg-3 d-lg-none d-xl-inline-block"
                          : ""
                      }
                    >
                      {item.button ? (
                        item.showToLoggedUser !== false && (
                          <ActiveLink activeClassName="active" href={item.link}>
                            <a
                              className="btn btn-primary"
                              onClick={() => onLinkClick(item.title)}
                            >
                              {item.title}
                            </a>
                          </ActiveLink>
                        )
                      ) : (
                        <ActiveLink
                          activeClassName="active"
                          href={item.link}
                          passHref
                        >
                          <NavLink onClick={() => onLinkClick(item.title)}>
                            {item.title}
                          </NavLink>
                        </ActiveLink>
                      )}
                    </NavItem>
                  ) : (
                    ""
                  )
                )}
              {props.loggedUser &&
                userMenu &&
                userMenu.map((item) => (
                  <Dropdown
                    nav
                    inNavbar
                    key={item.title}
                    className={item.type === "avatar" ? "ml-lg-3" : ""}
                    isOpen={dropdownOpen[item.title]}
                    toggle={() => toggleDropdown(item.title)}
                  >
                    <DropdownToggle
                      nav
                      style={item.type === "avatar" && { padding: 0 }}
                      onClick={() =>
                        setDropdownAnimate({
                          ...dropdownAnimate,
                          [item.title]: !dropdownOpen[item.img],
                        })
                      }
                    >
                      {item.type === "avatar" ? (
                        <div className="mr-2 avatar-border-white avatar avatar-sm overflow-hidden">
                          <Image
                            src={`/content${item.img}`}
                            width={36}
                            height={36}
                            layout="fixed"
                            alt={item.title}
                          />
                        </div>
                      ) : (
                        item.title
                      )}
                    </DropdownToggle>
                    <DropdownMenu
                      className={
                        dropdownAnimate[item.title] === false ? "hide" : ""
                      }
                      right
                    >
                      {item.dropdown &&
                        item.dropdown.map((dropdownItem) => (
                          <ActiveLink
                            key={dropdownItem.title}
                            activeClassName="active"
                            href={dropdownItem.link}
                            passHref
                          >
                            <DropdownItem
                              onClick={() => onLinkClick(item.title)}
                            >
                              {dropdownItem.title}
                            </DropdownItem>
                          </ActiveLink>
                        ))}
                    </DropdownMenu>
                  </Dropdown>
                ))}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

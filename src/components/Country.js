import React from 'react'

const Country =(props)=>{

    return (
<div className="dropdown my-3 mx-3" style={{position:'relative',
top: '60px'}}>
              <button
                className="btn btn-dark dropdown-toggle fa-regular fa-flag"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Country
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <h5 className="dropdown-item" style={{cursor: "pointer"}} onClick={() => {
                      props.country("us");
                    }}>
                    US
                  </h5>
                </li>
                <li>
                  <h5 className="dropdown-item" style={{cursor: "pointer"}} onClick={() => {
                      props.country("in");
                    }}>
                    India
                  </h5>
                </li>
                <li>
                  <h5 className="dropdown-item" style={{cursor: "pointer"}} onClick={() => {
                       props.country("ch");
                    }}>
                    China
                  </h5>
                </li>
                <li>
                  <h5 className="dropdown-item" style={{cursor: "pointer"}} onClick={() => {
                      props.country("jp");
                    }}>
                    Japan
                  </h5>
                </li>
              </ul>
            </div>
    );
}

export default Country
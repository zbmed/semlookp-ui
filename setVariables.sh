cat <<EOF > /usr/share/nginx/html/config.js
window.REACT_APP_KEYCLOAK_URL = "${KEYCLOAK_URL:-undefined}";
window.REACT_APP_KEYCLOAK_REALM = "${KEYCLOAK_REALM:-undefined}";
window.REACT_APP_KEYCLOAK_CLIENTID = "${KEYCLOAK_CLIENTID:-undefined}";
EOF

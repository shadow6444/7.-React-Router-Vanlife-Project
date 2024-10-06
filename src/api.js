export async function getVans() {
  const response = await fetch("/api/vans");
  if (!response.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: response.statusText,
      status: response.status,
    };
  }
  const resData = await response.json();

  return resData.vans;
}

export async function getVanDetail(id) {
  const response = await fetch(`/api/vans/${id}`);

  if (!response.ok) {
    throw {
      message: "Failed to fetch van data",
      statusText: response.statusText,
      status: response.status,
    };
  }

  const resData = await response.json();
  return resData.vans;
}

export async function getHostVans() {
  const response = await fetch("/api/host/vans");

  if (!response.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: response.statusText,
      status: response.status,
    };
  }

  const resData = await response.json();
  return resData.vans;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}

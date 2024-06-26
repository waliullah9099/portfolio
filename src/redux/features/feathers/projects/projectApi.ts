import { baseApi } from "../../api/baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProject: builder.mutation({
      query: (data) => ({
        url: "/projects",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["project"],
    }),

    getAllProject: builder.query({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
      providesTags: ["project"],
    }),

    getSingleProject: builder.query({
      query: (query) => ({
        url: `/projects/${query}`,
        method: "GET",
      }),
      providesTags: ["project"],
    }),

    updateProject: builder.mutation({
      query: ({ id, body }) => ({
        url: `/projects/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["project"],
    }),

    removeProject: builder.mutation({
      query: (query) => ({
        url: `/projects/${query}`,
        method: "DELETE",
      }),
      invalidatesTags: ["project"],
    }),
  }),
});

export const {
  useCreateProjectMutation,
  useGetAllProjectQuery,
  useGetSingleProjectQuery,
  useUpdateProjectMutation,
  useRemoveProjectMutation,
} = projectApi;

# Graph Algorithms Checklist: 13 weeks free course

Only concepts that you need to review to master Graph algorithms

**Week 1: Graph Algorithm Basics**
==============================
1. **Graph
          Representation: Adjacency Matrix & Adjacency List**<br>  [Graph Representation: Adjacency Matrix & Adjacency List](https://iq.opengenus.org/graph-representation-adjacency-matrix-adjacency-list/) is a technique used to
            represent graphs in computer science, where an [adjacency matrix ](https://iq.opengenus.org/adjacency-matrix/)is a square matrix used to represent a
            finite graph, and an adjacency list is a collection of unordered lists used to represent a finite graph.
2. **Directed Graph vs Undirected Graph**<br>  [Directed
              Graph vs Undirected Graph](https://iq.opengenus.org/directed-vs-undirected-graph/) explains the difference between these two types of graphs and how they can
            be represented mathematically.
3. **Depth
          First Search**<br>  [Depth-First Search](https://iq.opengenus.org/depth-first-search/)
            is an algorithm used to traverse a graph or tree in which the search moves down a branch as far as possible.
4. **Breadth First Search**<br>  [Breadth-First
              Search](https://iq.opengenus.org/breadth-first-search/) ([BFS](https://iq.opengenus.org/bfs-graph-traversal/)) is an algorithm used to traverse a graph or tree in which the search visits all the
            vertices at
            the same level before moving down to the next level. [BFS](https://iq.opengenus.org/bfs-graph-traversal/) is also a popular algorithm
            used to find shortest paths between nodes.
5. **Depth
          First Search vs Breadth First Search**<br>  [Depth First Search vs Breadth
              First Search](https://iq.opengenus.org/dfs-vs-bfs/) is a comparison of two traversal algorithms used in graph theory.
6. **Bidirectional Search Algorithm**<br>  [Bidirectional Search
              Algorithm](https://iq.opengenus.org/bidirectional-search/) is a graph traversal algorithm that searches for a path between two nodes in a graph by
            simultaneously running two breadth-first searches, one from the start node and one from the end node, until
            the two searches meet in the middle.

**Week 2: Topological Sorting**
===========================
1. **Topological Sort (BFS)**<br>  [Topological
              Sort using BFS](https://iq.opengenus.org/topological-sort-bfs/) works by initially finding all the nodes in the graph with zero incoming edges and
            adding them to a queue. Then it repeatedly removes the first node from the queue, adds it to the
            topologically sorted list, and removes all of its outgoing edges. If any nodes have zero incoming edges as a
            result of this removal, they are added to the queue. This process continues until the queue is empty and all
            nodes have been added to the topologically sorted list.
2. **Topological Sorting (DFS)**<br>  Learn how to perform [Topological Sorting using DFS](https://iq.opengenus.org/topological-sorting-dfs/). The algorithm works by recursively visiting each node in
            the graph using DFS and keeping track of a list of nodes in the order in which they finish being visited.
3. **Kahn's
          Algorithm for Topological Sorting**<br>  [Kahn's
              algorithm
              for topological sorting](https://iq.opengenus.org/kahns-algorithm-topological-sort/) works by initially finding nodes in the graph with zero incoming edges,
            removing them and their outgoing edges from the graph, and repeating the process with the updated graph.
            This continues until all nodes have been removed and the algorithm outputs the nodes in the order in which
            they were removed.
4. **Applications of Topological Sort**<br>  [Applications of Topological Sort](https://iq.opengenus.org/applications-of-topological-sort/)
            discusses various real-world applications of topological sorting. It provides examples of how the
            technique can be used in areas such as project scheduling, build systems, and task management. Additionally,
            it discusses the benefits of using topological sorting in these contexts, such as improved efficiency and
            reduced errors.

**Week 3: Shortest Path in Graph**
==============================
1. **Shortest path using topological sort**<br>  [Shortest path using topological sort](https://iq.opengenus.org/shortest-path-using-topological-sort/) article explains an algorithm to find the shortest
            path between two vertices in a directed acyclic graph (DAG), using a topological sorting technique and
            dynamic programming.
2. **Counting Paths in a Matrix**<br>  [Counting Paths in a Matrix](https://iq.opengenus.org/count-paths-from-top-left-to-bottom-right-of-a-matrix/) is a dynamic programming algorithm that counts the number of
            unique paths from the top left corner to the bottom right corner of a matrix, moving only right or down, by
            computing a table of intermediate counts for each position in the matrix and using this table to gradually
            update the total count. In the context of matrices, intermediate counts refer to the number of elements that
            are present between two specific elements in a matrix.
3. **Print
          all the paths between two vertices**<br>  [Print all the paths between two vertices](https://iq.opengenus.org/print-all-the-paths-between-two-vertices/) article explains how to find and print all
            possible paths between two vertices in a graph, including paths that pass through other vertices, using
            Depth First Search(DFS) and backtracking.
4. **Shortest path with k edges**<br>  Learn how to find the [shortest path with k edges](https://iq.opengenus.org/shortest-path-with-k-edges/) using an algorithm to find the shortest path between two
            vertices in a graph, with a constraint that the path must have a fixed number of edges, using dynamic
            programming.
5. **Path
          between nodes in a directed graph**<br>  [Path
              between nodes in a directed graph](https://iq.opengenus.org/path-between-nodes-directed-graph/) article explains a recursive graph traversal algorithm used to find
            all possible paths between two nodes in a directed graph using DFS.
6. **Dijkstra's Algorithm**<br>  [Dijkstra's Algorithm](https://iq.opengenus.org/dijkstras-algorithm-finding-shortest-path-between-all-nodes/) is a pathfinding algorithm that finds the shortest
            path between a starting node and all other nodes in a weighted graph, using a priority queue to efficiently
            explore the graph and update the distances to each node. Also learn about the algorithm's [time and space complexity](https://iq.opengenus.org/time-and-space-complexity-of-dijkstra-algorithm/).
7. **Shortest Path Faster Algorithm**<br>  [Shortest
              Path Faster Algorithm](https://iq.opengenus.org/shortest-path-faster-algorithm/) is an improvement on Dijkstra's algorithm for finding the shortest path in a
            weighted graph that allows negative edge weights. It uses a queue-based approach to efficiently explore the
            graph and update the distances to each node.
8. **Floyd-Warshall Algorithm**<br>  [Floyd-Warshall Algorithm](https://iq.opengenus.org/floyd-warshall-algorithm-shortest-path-between-all-pair-of-nodes/) is a dynamic programming algorithm that finds
            the shortest path between all pairs of nodes in a weighted graph, by computing a table of intermediate
            distances between all pairs of nodes and using this table to gradually update the shortest path.
9. **Bellman-Ford Algorithm**<br>  [Bellman-Ford
              Algorithm](https://iq.opengenus.org/bellman-ford-algorithm/) is an algorithm for finding the shortest path between a starting node and all other nodes in
            a weighted graph, even when the graph has negative edge weights. It works by iteratively relaxing the edges
            of the graph to gradually find the shortest path. In addition, also understand [the time and space complexity of the algorithm](https://iq.opengenus.org/time-and-space-complexity-of-bellman-ford-algorithm/).
10. **Johnson Algorithm**<br>  [Johnson Algorithm](https://iq.opengenus.org/johnson-algorithm/)
            is an algorithm for finding the shortest path between all pairs of nodes in a weighted graph. It works by
            first reweighting the edges of the graph using a potential function, and then using Dijkstra's algorithm to
            find the shortest path between each pair of nodes.
11. **DeSopo-Pape algorithm**<br>  [DeSopo-Pape
              algorithm](https://iq.opengenus.org/desopo-pape-algorithm/) article explains a single-source shortest path algorithm that handles negative edge weights
            by using a stack and a priority queue, and can work on both directed and undirected graphs. It is an
            improvement over Dijkstra's algorithm.

**Week 4: Minimum Spanning Tree**
=============================
1. **Introduction to Minimum Spanning Trees**<br>  [Minimum
              Spanning Tree](https://iq.opengenus.org/what-is-a-minimum-spanning-tree/) is a tree that spans all the vertices of a connected, weighted graph with the least
            possible total edge weight.
2. **Kruskal's Minimum Spanning Tree Algorithm**<br>  [Kruskal's Minimum Spanning Tree Algorithm](https://iq.opengenus.org/kruskal-minimum-spanning-tree-algorithm/) involves sorting the edges by weight and
            adding them one by one to the tree as long as they don't create a cycle. Also analyse the [time and space complexity of the algorithm](https://iq.opengenus.org/time-and-space-complexity-of-kruskal-algorithm/").
3. **Prim's
          Minimum Spanning Tree Algorithm**<br>  [Prim's Minimum Spanning Tree Algorithm](https://iq.opengenus.org/prim-minimum-spanning-tree-algorithm/) involves starting with an arbitrary vertex and
            adding the edge with the smallest weight to the growing tree until all vertices are included. Additionally,
            learn about the algorithm's [time and space complexity](https://iq.opengenus.org/time-and-space-complexity-of-prims-algorithm/).
4. **Boruvka's Minimum Spanning Tree Algorithm**<br>  [Boruvka's
              Minimum Spanning Tree Algorithm](https://iq.opengenus.org/boruvka-minimum-spanning-tree/) involves creating a forest of trees where each tree is a single
            vertex, and then repeatedly adding the cheapest edge that connects two different trees until all vertices
            are in a single tree.
5. **Reverse Delete Algorithm**<br>  [Reverse Delete
              Algorithm](https://iq.opengenus.org/reverse-delete-algorithm/) involves starting with all edges in a graph and removing them one by one in non-increasing
            order of weight until the remaining edges form a tree.

**Week 5: Maximum Flow Problem**
============================
1. **Introduction to Maximum Flow Problem**<br>  [Maximum
              Flow Problem](https://iq.opengenus.org/maximum-flow-problem-overview/) involves finding the maximum flow that can be sent through a network from a source to a
            sink. Here, the term "flow" refers to some quantity, such as data, that is being transported
            through a network represented as a directed graph. Solving the maximum flow problem has many real-world
            applications, such as optimizing transportation networks, managing internet traffic, and designing water
            distribution systems.
2. **Ford-Fulkerson Algorithm**<br>  [Ford-Fulkerson
              Algorithm](https://iq.opengenus.org/ford-fulkerson-algorithm/) is based on the concept of augmenting paths and works by iteratively finding augmenting
            paths from the source to the sink until no more paths can be found. This algorithm makes use of Depth First
            Search (DFS). In a flow network, an augmenting path is a path that can be used to increase the amount of
            flow that can be sent from the source to the sink.
3. **Dinic's Algorithm**<br>  [Dinic's Algorithm](https://iq.opengenus.org/dinics-algorithm/)
            is based on the concept of layered graphs and works by iteratively building a layered graph and finding
            blocking flows until no more blocking flows can be found. A layered graph is a type of graph where the nodes
            are partitioned into layers, with each layer representing a different distance from the source. In other
            words, nodes in the same layer are at the same distance from the source.
4. **Edmonds-Karp Algorithm**<br>  [Edmonds-Karp Algorithm for Maximum Flow](https://iq.opengenus.org/edmonds-karp-algorithm-for-maximum-flow/) uses a breadth-first search to find
            augmenting paths and then calculates the maximum amount of flow that can be sent from the source to the
            sink.
5. **Push-Relabel Algorithm**<br>  [Push-Relabel
              Algorithm](https://iq.opengenus.org/push-relabel-algorithm/) works by maintaining a preflow, which is a partial flow that satisfies certain
            conditions, and then iteratively pushing flow from nodes with excess flow to nodes with deficit flow.

**Week 6: Graph Coloring Problem**
==============================
1. **Overview of Graph Colouring Algorithms**<br>  [Graph Colouring Algorithms](https://iq.opengenus.org/overview-of-graph-colouring-algorithms/) involve assigning colors to the vertices of a graph such
            that adjacent vertices do not have the same color.
2. **Bipartite Checking using BFS**<br>  Learn about [Bipartite Checking
              using BFS](https://iq.opengenus.org/bipartite-checking-bfs/). A graph is bipartite if it is possible to divide its vertices into two independent sets
            such that every edge connects a vertex from one set to a vertex from the other set. We use Breadth
            First Search (BFS) to color the vertices of the graph in two colors, starting from an arbitrary vertex. If,
            during this process, an edge is found that connects two vertices of the same color, then the graph is not
            bipartite. If all edges can be colored without any conflicts, then the graph is bipartite.
3. **Graph
          Colouring using Greedy Algorithm**<br>  [Graph
              Colouring using Greedy Algorithm](https://iq.opengenus.org/graph-colouring-greedy-algorithm/) is a widely used algorithm for graph coloring that assigns colors to
            vertices in a way that minimizes the total number of colors used.
4. **Wigderson Algorithm for Graph Coloring**<br>  [Wigderson
              algorithm](https://iq.opengenus.org/wigderson-algorithm/) is a randomized algorithm for coloring graphs. The algorithm
            works by randomly partitioning the vertices of the graph into subsets, and then recursively coloring each
            subset using a reduced color palette.
5. **Welsh-Powell Algorithm**<br>  [Welsh-Powell
              Algorithm for Graph Coloring](https://iq.opengenus.org/welsh-powell-algorithm/) is a simple heuristic algorithm
            used to color graphs that sorts the vertices in decreasing order of degree and assigns colors to each
            vertex, making sure that no adjacent vertices have the same color.
6. **Flood
          Fill Algorithms**<br>  Explore the [flood
              fill algorithm](https://iq.opengenus.org/flood-fill-algorithms/), a technique used to fill a connected region of pixels with a
            particular color.

**Week 7: Maximum Matching Problem**
================================
1. **Introduction to Maximum Matching**<br>  [Maximum matching](https://iq.opengenus.org/maximum-matching/) is
            a graph theory problem that involves finding the largest set of edges in a graph such that no two edges
            share a common vertex. It has applications in fields such as computer networking, image processing, and
            social network analysis.
2. **Hungarian Maximum Matching Algorithm**<br>  [The
              Hungarian algorithm](https://iq.opengenus.org/hungarian-maximum-matching-algorithm/) is a well-known algorithm for solving the maximum matching problem in bipartite
            graphs. It works by augmenting the matching until no further improvement is possible.
3. **Hopcroft-Karp Algorithm**<br>  [The Hopcroft-Karp
              algorithm](https://iq.opengenus.org/hopcroft-karp-algorithm/) is an efficient algorithm for finding the maximum matching in a bipartite graph. It works by
            alternating between finding augmenting paths and updating the matching, and has been used in applications
            such as online advertising and recommendation systems.
4. **Blossom Maximum Matching Algorithm**<br>  [The
              Blossom algorithm](https://iq.opengenus.org/blossom-maximum-matching-algorithm/) is a graph theory algorithm for finding maximum matchings in general graphs. It
            works by finding augmenting paths in a way that reduces the size of the graph, and has applications in areas
            such as transportation and supply chain management.

**Week 7: Stable Marriage Problem**
===============================
1. **Stable
          Matching and Gale-Shapley algorithm**<br>  [Stable
              matching](https://iq.opengenus.org/basics-of-stable-matching/) is a problem in which two groups of individuals have preferences for members of the other
            group, and the goal is to find a stable pairing of individuals such that no two individuals prefer each
            other to their current partners. Also learn about the [Gale-Shapley
              algorithm](https://iq.opengenus.org/gale-shapley-algorithm/), which is a popular algorithm
            for solving this problem.
2. **Variants of Stable Matching**<br>  [Variants of
              stable matching](https://iq.opengenus.org/variants-of-stable-matching/) are modifications to the original stable matching problem that involve additional
            constraints or objectives. This article discusses two common variants: incomplete preference lists, in which
            some individuals do not have preferences for all members of the other group, and weighted preferences, in
            which individuals have numerical rankings of their preferences that are used to compute a weighted stability
            score for each pairing.

**Week 8: Maximum / Minimum Cut Problems**
======================================
1. **Maximum Cut Problem**<br>  [Maximum Cut
              Problem](https://iq.opengenus.org/maximum-cut-problem/) article discusses the maximum cut problem in graph theory, which involves dividing the nodes
            of a graph into two disjoint sets with the maximum number of edges between them.
2. **Minimum Cut Problem**<br>  [Minimum Cut
              Problem](https://iq.opengenus.org/minimum-cut-problem/) article explains the minimum cut problem in graph theory, which involves finding the smallest
            cut in a graph that divides the nodes into two disjoint sets.
3. **Articulation Points or Cut Vertices in a Graph**<br>  Understand how to find[ articulation points or cut vertices in a graph](https://iq.opengenus.org/find-articulation-points-or-cut-vertices-in-a-graph/). In a graph, connected components are
            groups of vertices that are connected to each other by edges. [Articulation points](https://iq.opengenus.org/find-articulation-point-in-graph/) are the vertices in a graph that, if removed, would increase the
            number of connected components in the graph. If you remove this vertex, the graph might split into multiple
            smaller pieces, and each piece would become a connected component on its own.
4. **Cut
          Edges in a Graph**<br>  Learn how to [find cut edges
              in a graph](https://iq.opengenus.org/find-cut-edges-in-a-graph/) and how to identify them. Cut edges are the edges in a graph that, if removed, would
            increase the number of connected components in the graph.
5. **Karger
          Algorithm**<br>  [Karger Algorithm to Find Minimum Cut](https://iq.opengenus.org/karger-algorithm-to-find-minimum-cut/) is a randomized algorithm used to find the minimum
            cut in a graph. The algorithm works by iteratively contracting two randomly chosen vertices until only two
            vertices are left. The cut that corresponds to these two vertices is the minimum cut of the original graph.

**Week 8: Strongly Connected Components**
=====================================
1. **Euler
          or Eulerian Tour**<br>  [Euler or
              Eulerian Tour](https://iq.opengenus.org/what-is-a-euler-or-eulerian-tour/) is a path that visits every edge exactly once. Euler tour can be found in both directed
            and undirected graphs.
2. **Tarjan's Algorithm**<br>  [Tarjan's Algorithm](https://iq.opengenus.org/tarjans-algorithm/)
            is a graph traversal algorithm used to find strongly connected components in a directed graph. It uses a
            stack-based approach and a recursive depth-first search.
3. **Kosaraju's Algorithm**<br>  [Kosaraju's Algorithm for Strongly Connected Components](https://iq.opengenus.org/kosarajus-algorithm-for-strongly-connected-components/) is an algorithm used to find
            strongly connected components in a directed graph. It uses two depth-first searches and a stack-based
            approach.

**Week 9: Transitive Closure**
==========================
1. **Transitive Closure using Floyd Warshall Algorithm**<br>  Learn how to find [transitive closure using Floyd Warshall Algorithm](https://iq.opengenus.org/transitive-closure-using-floyd-warshall-algorithm/). The Floyd Warshall
            algorithm computes the shortest path between all pairs of vertices in a graph. By modifying the algorithm to
            compute boolean values instead of distances, we can use it to find the transitive closure of a graph, which
            indicates whether there is a path between every pair of vertices.
2. **Transitive Closure using Graph Powering**<br>  [Transitive Closure using Graph Powering](https://iq.opengenus.org/transitive-closure-graph-powering/) explains how to find the
            transitive closure of a graph. In this method, the transitive closure matrix is computed
            iteratively by raising the adjacency matrix of the graph to increasingly higher powers.

**Week 9: Travelling Salesman Problem**
===================================
1. **Travelling Salesman Problem - Brute Force**<br>  [Travelling Salesman Problem - Brute Force](https://iq.opengenus.org/travelling-salesman-problem-brute-force/) explains one of the
            simplest approaches for finding the shortest possible route that visits every city on a given list exactly
            once and returns to the starting city. The brute force algorithm involves generating all possible
            permutations of the cities and
            calculating the distance of each permutation.
2. **Travelling Salesman Problem - Branch and Bound**<br>  [Travelling Salesman Problem - Branch and Bound](https://iq.opengenus.org/travelling-salesman-branch-bound/) explains an
            optimization algorithm for solving the Travelling Salesman Problem. The Branch and Bound algorithm uses a
            tree structure to explore the possible solutions to the problem, pruning branches that cannot possibly lead
            to the optimal solution. This algorithm is more efficient and can handle
            larger sets of cities.
3. **Travelling Salesman Problem - Dynamic Programming**<br>  [Travelling
              Salesman Problem - Dynamic Programming](https://iq.opengenus.org/travelling-salesman-problem-dp/) explains another optimization algorithm for
            solving the Travelling Salesman Problem. The Dynamic Programming algorithm works by breaking down the
            problem into smaller sub-problems and solving them recursively.
4. **Travelling Salesman Problem - Approximation Algorithm**<br>  [Travelling
              Salesman Problem - Approximation algorithm](https://iq.opengenus.org/approximation-algorithm-for-travelling-salesman-problem/) uses the concept of Minimum Spanning Tree to solve this
            problem. This approach involves finding the best way to connect the
            cities, creating a circle that goes through all the cities and finding the shortest way to do so

**Week 10: Islands in a Grid**
==========================
1. **Making
          a Large Island**<br>  Explore the problem of [making a large island](https://iq.opengenus.org/making-a-large-island/) by changing the value of some 0s to 1s in a given
            matrix.
2. **Maximum
          Area of Island**<br>  [Maximum Area of
              Island](https://iq.opengenus.org/maximum-area-of-island/) is a common problem in computer science where you need to find the largest connected group of
            1's in a grid of 1's and 0's. This problem can be solved using techniques such as depth-first search or
            breadth-first search.
3. **Number
          of Islands**<br>  Learn about the problem of finding the [number of islands in a given matrix](https://iq.opengenus.org/number-of-islands/), where an island is a group of connected 1s
            (representing land) surrounded by 0s (representing water). Explore two approaches to solve this
            problem: depth-first search (DFS) and breadth-first search (BFS).
4. **Number
          of Closed Islands**<br>  Explore the [Number
              of Closed Islands](https://iq.opengenus.org/number-of-closed-islands/) article that explains an algorithm to determine the number of isolated regions
            within a
            binary matrix where 0 represents water and 1 represents land.

**Week 11: Other Graph Theory Algorithms**
======================================
1. **Cycle
          in Graphs using Degree of Nodes**<br>  In [Cycle
              using Degree of Nodes in a Graph](https://iq.opengenus.org/cycle-using-degree-of-nodes-graph/), you'll learn how to detect cycles in a graph
            using the degree of nodes.
2. **Fleury
          Algorithm: Finding Eulerian Tours in a Graph**<br>  [Fleury Algorithm: Finding Eulerian Tours in a Graph](https://iq.opengenus.org/fleury-algorithm-finding-eulerian-tours-in-a-graph/) introduces the Fleury algorithm,
            which finds an Eulerian tour in a graph. Eulerian tour is a path in a graph that visits every edge exactly
            once and returns to its starting point.
3. **Hamiltonian Path and Cycle**<br>  Learn about [Hamiltonian
              Path](https://iq.opengenus.org/hamiltonian-path/) and [Hamiltonian
              Cycle](https://iq.opengenus.org/hamiltonian-cycle/) and explore algorithms to find them.
4. **Vertex
          Cover Problem**<br>  [Vertex Cover
              Problem](https://iq.opengenus.org/vertex-cover-problem/) explains how to find the smallest set of vertices that covers
            all edges in a graph.
5. **Clique
          in Graphs**<br>  [Clique in Graphs](https://iq.opengenus.org/clique-in-graphs/)
            are a subset of vertices where every vertex is connected to every other vertex in the subset. Learn about
            the basics of cliques, including properties, types and algorithms for finding
            cliques in a graph, such as brute force, Bron-Kerbosch algorithm, and cliquer algorithm. Explore some
            applications of cliques, such as in social networks, gene expression networks, and computational biology.
6. **Bron-Kerbosch Algorithm**<br>  [Bron-Kerbosch
              algorithm](https://iq.opengenus.org/bron-kerbosch-algorithm/) is a recursive algorithm for finding all maximal cliques in an undirected graph. The
            algorithm works by selecting a pivot vertex and iterating through all possible combinations of
            vertices that are adjacent to the pivot, checking whether each combination forms a clique, and recursively
            calling the algorithm on the remaining vertices.
7. **Algorithm to Find Cliques of a Given Size k**<br>  Learn how to [find all cliques of a given size k](https://iq.opengenus.org/algorithm-to-find-cliques-of-a-given-size-k/) in an undirected graph. The algorithm is based on
            the Bron-Kerbosch algorithm, and it involves iterating through all possible subsets of vertices, checking
            whether each subset forms a clique of size k, and keeping track of all such cliques.
8. **Greedy
          Approach to Find Single Maximal Clique**<br>  Explore [ a greedy algorithm for finding a single maximal clique](https://iq.opengenus.org/greedy-approach-to-find-single-maximal-clique/) in an undirected graph. The
            algorithm starts with a random vertex and iteratively adds adjacent vertices to the clique until no more
            vertices can be added.
9. **Farach-Colton and Bender Algorithm (LCA)**<br>  [Farach-Colton and Bender Algorithm (LCA)](https://iq.opengenus.org/farach-colton-and-bender-algorithm-lca/) describes the Farach-Colton and Bender
            algorithm, which can be used to solve the lowest common ancestor problem in trees.
10. **Mother
          Vertex in Graph**<br>  [Mother Vertex in
              Graph](https://iq.opengenus.org/mother-vertex-in-graph/) explains how to find a vertex that can reach all other vertices in a directed
            graph, using Tarjan's algorithm which involves identifying strongly connected components.
11. **Number
          of Paths with K Edges**<br>  [Number of
              Paths with K Edges](https://iq.opengenus.org/number-of-paths-with-k-edges/) explains how to count the number of paths in a graph with a fixed number of
            edges, using dynamic programming to build a matrix of counts for each pair of vertices and number of edges.
12. **Fundamentals of Euler Path**<br>  In [Fundamentals
              of Euler Path](https://iq.opengenus.org/fundamentals-of-euler-path/), understand the concepts and properties of Euler paths and
            circuits in graphs, including the conditions for their existence and how to construct them.
13. **Transpose Graph**<br>  Learn how to create the [transpose of a graph](https://iq.opengenus.org/transpose-graph/), which is a new graph with all the edges reversed, using an
            adjacency matrix or an adjacency list.
14. **Find
          All Bridges in Graph**<br>  Learn how to [find
              all the bridges in an undirected graph](https://iq.opengenus.org/find-all-bridges-in-graph/), which are edges whose removal would
            disconnect the graph, using Tarjan's algorithm and depth-first search.
15. **Karp's
          Minimum Mean Cycle Algorithm**<br>  [Karp's
              Minimum Mean Cycle Algorithm](https://iq.opengenus.org/karp-minimum-mean-cycle-algorithm/) first finds the shortest paths to all vertices
            using Bellman-Ford, and then iteratively adds edges to the graph to find the minimum mean weight cycle. The
            mean weight of a cycle is the sum of the weights of the edges in the cycle divided by the number of edges.
            The minimum mean weight cycle is the cycle with the smallest mean weight in the graph. It is useful in
            various applications such as transportation and logistics.
16. **Detect
          Cycle in an Undirected Graph**<br>  Learn how to [detect cycles in an undirected graph](https://iq.opengenus.org/detect-cycle-in-undirected-graph/) using Depth First Search (DFS) algorithm and the
            disjoint-set data structure.
17. **Biconnected Graph**<br>  [Biconnected Graph](https://iq.opengenus.org/biconnected-graph/)
            is a connected graph that remains connected even after any vertex (or node) is removed. The article explains
            the concepts of biconnected components and biconnected graphs and presents algorithms for finding them.
18. **Entropy of Graph**<br>  [Entropy of Graph](https://iq.opengenus.org/entropy-of-graph/)
            explains
            how to calculate the entropy of a graph, which measures the degree of randomness or uncertainty in the
            graph,
            using information theory.
19. **Biconnected Components**<br>  [Biconnected
              Components](https://iq.opengenus.org/biconnected-components/) article explains an algorithm used in graph theory to identify the set of edges that would
            remain if any single vertex was removed from the graph.

**Week 12: Other Tree based Problems**
==================================
1. **Centroid
          Decomposition of Tree**<br>  In [Centroid
              Decomposition of Tree](https://iq.opengenus.org/centroid-decomposition-of-tree/) a tree is recursively divided into smaller subtrees
            by finding its centroid (i.e., the node that minimizes the maximum subtree size), and each subtree is
            processed separately. We can use this to solve tree based problems like finding the diameter of a tree,
            computing the distance between two nodes etc.
2. **Diameter
          using Height of Node**<br>  [Diameter
              Using Height of Node](https://iq.opengenus.org/diameter-using-height-of-node/) article explains how to find the diameter of a tree using the height of its
            nodes, by computing the heights of each node and finding the pair of nodes with the maximum distance between
            them.
3. **Diameter
          of n-ary Tree (DP)**<br>  [Diameter of
              n-ary Tree (DP)](https://iq.opengenus.org/diameter-of-n-ary-tree-dp/) article explains how to find the diameter of an n-ary tree using dynamic programming.
            An n-ary tree is a tree data structure in which each node can have at most n children.
4. **Ancestors of Node in Binary Tree**<br>  Learn how to find [Ancestors of Node in Binary Tree](https://iq.opengenus.org/ancestors-of-node-in-binary-tree/) using iterative and [recursive](https://iq.opengenus.org/ancestors-of-node-in-binary-tree-recursive/) approaches.
5. **Nodes
          which are at distance K from root**<br>  [Nodes which are at distance K from root](https://iq.opengenus.org/nodes-which-are-at-distance-k-from-root/) article explains how to find all nodes in a
            binary tree that are at a distance of K from the root node, using a simple depth-first search approach and
            maintaining the level of each node in the tree.
6. **Nodes
          at Distance K from Given Node**<br>  Learn how to find all [nodes in a binary tree that are at a distance of K from a given node](https://iq.opengenus.org/nodes-at-distance-k-from-given-node/)
            , using a combination of depth-first search and breadth-first search.
            The algorithm first finds the target node and then performs a breadth-first search to find all nodes at a
            distance of K from it.
7. **Minimum Nodes Removed (No Subtree More than K Nodes)**<br>  Learn how to find [the minimum number of nodes that need to be removed from a
              tree](https://iq.opengenus.org/minimum-nodes-removed-no-subtree-more-than-k-nodes/) in order to ensure that no subtree in the resulting tree has more than K nodes. The algorithm
            recursively computes the size of each subtree and performs a post-order traversal to mark the nodes that
            need to be removed. Traversal begins first the left subtree, then the right subtree, and finally the root
            node.
8. **Maximum Sum Leaf to Root Path**<br>  [Maximum Sum
              Leaf
              to Root Path](https://iq.opengenus.org/maximum-sum-leaf-to-root-path/) article discusses an algorithm for finding the maximum sum leaf-to-root path in a binary
            tree, which is the path with the highest sum of node values from any leaf node to the root node. A "leaf
            node"
            refers to a node in a tree data structure that does not have any branches or sub-nodes stemming from it.
9. **Find
          Height
          or Depth of Binary Tree**<br>  Explore how to [find height or depth of Binary Tree](https://iq.opengenus.org/find-height-or-depth-of-binary-tree/) using an algorithm to find the height or depth of a
            binary tree, a tree data structure where each node has at most two child nodes.
10. **Minimum
          Number of Swaps Required to Convert Binary Tree to
          Binary Search Tree**<br>  [Minimum Number of Swaps Required to Convert Binary Tree to Binary Search
              Tree](https://iq.opengenus.org/algorithm-for-finding-minimum-number-of-swaps-required-to-convert-binary-tree-to-binary-search-tree/) explains an algorithm that converts a binary tree into a binary search tree with minimum
            swaps, using a combination of in-order traversal and a modified selection sort.
11. **Find
          Level of Node from Root**<br>  Learn how to [find the level or depth of a node](https://iq.opengenus.org/find-level-of-node-from-root/) in a binary tree from the root node using recursion
            and depth-first search.
12. **Find
          Maximum or Minimum Element in Binary Search Tree**<br>  Learn how to [find maximum or minimum element in Binary Search Tree](https://iq.opengenus.org/find-maximum-or-minimum-element-in-binary-search-tree/)
            using an algorithm used to find the maximum or minimum element in a binary search tree, a data
            structure that allows for efficient searching, insertion, and deletion operations.

**Week 13.a: Other Graph Traversal Algorithms**
===========================================
1. **Depth
          Limited Search**<br>  [Depth Limited
              Search](https://iq.opengenus.org/depth-limited-search/) is a variant of depth-first search where a maximum depth limit is set for the search. This is
            useful in cases where we don't want the search to go too deep and want to limit the amount of resources used
            by the search algorithm.
2. **Iterative Deepening Search**<br>  [Iterative
              Deepening Search](https://iq.opengenus.org/iterative-deepening-search/) is a search algorithm that combines the benefits of both depth-first search and
            breadth-first search. It starts with a depth limit of 0 and gradually increases the depth limit until the
            goal is found. This algorithm is useful in cases where the search space is large and the depth of the
            solution is unknown.
3. **Iterative Inorder Traversal**<br>  [Iterative
              Inorder Traversal](https://iq.opengenus.org/iterative-inorder-travesal/) is a method for traversing a binary tree in an inorder fashion (i.e., visiting the
            left subtree, then the root, then the right subtree) without using recursion. It uses a stack data structure
            to simulate the recursive calls used in the recursive version of the inorder traversal algorithm.

**Week 13.b: Miscellaneous Graph Theory Problems**
==============================================
1. **Alien
          Dictionary**<br>  Understand how to create an [alien dictionary](https://iq.opengenus.org/alien-dictionary/) given a list of words in a specific order. It presents
            an approach to solve this problem using topological sorting, which is a technique used to order the vertices
            in a directed graph.
2. **De
          Bruijn Sequences**<br>  [De Bruijn
              Sequences](https://iq.opengenus.org/de-brujin-sequences/) are special sequences that contain every possible k-length sequence of a given alphabet
            exactly once as a substring. They have applications in various fields such as coding theory, cryptography,
            and bioinformatics.
3. **Graph
          and Subgraph Isomorphism**<br>  [Graph and
              Subgraph Isomorphism](https://iq.opengenus.org/graph-and-subgraph-isomorphism/) is the problem of determining whether a given graph contains a subgraph that is
            structurally identical to a given graph. It is an important problem in computer science and has applications
            in various fields such as chemistry, biology, and computer vision.

**Week 13.c: Graph Data Structure using Java**
==========================================
1. **Graph
          using OOP in Java**<br>  [Graph using OOP
              Java](https://iq.opengenus.org/graph-using-oop-java/) tutorial explains how to implement a graph data structure using object-oriented programming
            principles in Java, a popular programming language.

**Week 13.d: Applications of Graph in Real life**
=============================================
1. **Algorithm Behind Bill Splitting App**<br>  Learn about the [algorithm behind Bill Splitting App](https://iq.opengenus.org/algorithm-behind-bill-splitting-app/) which involves dividing bills among friends based
            on their respective shares, and ensuring that everyone pays and receives the correct amount.
2. **Two
          Sum Problem in Binary Search Tree**<br>  [Two
              Sum Problem in Binary Search Tree](https://iq.opengenus.org/two-sum-problem-in-binary-search-tree/) explains how to solve the two sum problem for a binary
            search tree, which involves finding two nodes in the tree that add up to a given target value. Learn a
            simple recursive approach that utilizes the properties of binary search trees to achieve linear
            time complexity. This problem is applicable in real-life scenarios such as financial transactions,
            data analysis, engineering, and image processing.
3. **Use of Graph data structure in TensorFlow**<br>  Learn about the [applications of Graph in TensorFlow](https://iq.opengenus.org/two-sum-problem-in-binary-search-tree/). Tensorflow is an open-source machine learning
            framework that uses a computation graph to represent a machine learning or deep learning model,
            with each node in the graph representing an operation and each edge representing the flow of data between
            these operations.

---
Generated by OpenGenus. Updated on 2023-11-27
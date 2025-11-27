import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Star, GitFork, Code, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface GitHubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
  updated_at: string;
}

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export const GitHubStats = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const username = "yourusername"; // Replace with your GitHub username

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user stats
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();
        setStats(userData);

        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );
        const reposData = await reposResponse.json();
        setRepos(reposData);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (loading) {
    return (
      <section id="github-stats" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="github-stats" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="gradient-text">GitHub Activity</span>
          </h2>
          <p className="text-muted-foreground text-lg font-mono">
            My latest contributions and projects
          </p>
        </motion.div>

        {/* Stats Overview */}
        {stats && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <motion.div variants={itemVariants}>
              <Card className="glass-card text-center hover-glow">
                <CardContent className="pt-6">
                  <Github className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold gradient-text">{stats.public_repos}</div>
                  <p className="text-sm text-muted-foreground font-mono">Public Repos</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass-card text-center hover-glow">
                <CardContent className="pt-6">
                  <Star className="h-8 w-8 mx-auto mb-2 text-accent" />
                  <div className="text-3xl font-bold gradient-accent-text">
                    {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}
                  </div>
                  <p className="text-sm text-muted-foreground font-mono">Total Stars</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass-card text-center hover-glow">
                <CardContent className="pt-6">
                  <GitFork className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold gradient-text">
                    {repos.reduce((acc, repo) => acc + repo.forks_count, 0)}
                  </div>
                  <p className="text-sm text-muted-foreground font-mono">Total Forks</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass-card text-center hover-glow">
                <CardContent className="pt-6">
                  <Code className="h-8 w-8 mx-auto mb-2 text-accent" />
                  <div className="text-3xl font-bold gradient-accent-text">{stats.followers}</div>
                  <p className="text-sm text-muted-foreground font-mono">Followers</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}

        {/* Recent Repositories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {repos.map((repo, index) => (
            <motion.div key={repo.name} variants={itemVariants}>
              <Card className="glass-card h-full hover-glow group">
                <CardHeader>
                  <CardTitle className="flex items-start justify-between">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-mono hover:text-primary transition-colors flex-1"
                    >
                      {repo.name}
                    </a>
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2 font-mono">
                    {repo.description || "No description available"}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      {repo.forks_count}
                    </span>
                    {repo.language && (
                      <Badge variant="secondary" className="font-mono text-xs">
                        {repo.language}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                    <Calendar className="h-3 w-3" />
                    Updated {new Date(repo.updated_at).toLocaleDateString()}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
